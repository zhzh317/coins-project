"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, Clock, Filter, X } from "lucide-react"
import Image from "next/image"
import { allArticles, searchArticles, getAllCategories, getAllTags, type Article } from "@/lib/articleData"

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(allArticles)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const categories = getAllCategories()
  const allTags = getAllTags()

  useEffect(() => {
    const query = searchParams.get('q')
    const category = searchParams.get('category')
    const tags = searchParams.get('tags')

    if (query) {
      setSearchQuery(query)
    }
    if (category) {
      setSelectedCategory(category)
    }
    if (tags) {
      setSelectedTags(tags.split(','))
    }

    performSearch(query || "", category, tags ? tags.split(',') : [])
  }, [searchParams])

  const performSearch = (query: string, category?: string | null, tags: string[] = []) => {
    setIsLoading(true)

    // Simulate loading delay for better UX
    setTimeout(() => {
      let filtered = allArticles

      // Filter by category
      if (category) {
        filtered = filtered.filter(article =>
          article.category.toLowerCase() === category.toLowerCase()
        )
      }

      // Filter by tags
      if (tags.length > 0) {
        filtered = filtered.filter(article =>
          tags.some(tag =>
            article.tags.some(articleTag =>
              articleTag.toLowerCase().includes(tag.toLowerCase())
            )
          )
        )
      }

      // Filter by search query
      if (query.trim()) {
        const searchTerm = query.toLowerCase()
        filtered = filtered.filter(article =>
          article.title.toLowerCase().includes(searchTerm) ||
          article.excerpt.toLowerCase().includes(searchTerm) ||
          article.category.toLowerCase().includes(searchTerm) ||
          article.author.toLowerCase().includes(searchTerm) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        )
      }

      // Sort by relevance (exact matches first, then date)
      if (query.trim()) {
        const searchTerm = query.toLowerCase()
        filtered.sort((a, b) => {
          const aExactMatch = a.title.toLowerCase().includes(searchTerm) ? 1 : 0
          const bExactMatch = b.title.toLowerCase().includes(searchTerm) ? 1 : 0

          if (aExactMatch !== bExactMatch) {
            return bExactMatch - aExactMatch
          }

          // Sort by date if relevance is equal
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
      } else {
        // Sort by date if no query
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      }

      setFilteredArticles(filtered)
      setIsLoading(false)
    }, 300)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateURL(searchQuery, selectedCategory, selectedTags)
    performSearch(searchQuery, selectedCategory, selectedTags)
  }

  const updateURL = (query: string, category: string | null, tags: string[]) => {
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query)
    if (category) params.set('category', category)
    if (tags.length > 0) params.set('tags', tags.join(','))

    const newURL = params.toString() ? `/search?${params.toString()}` : '/search'
    router.push(newURL, { scroll: false })
  }

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category)
    updateURL(searchQuery, category, selectedTags)
    performSearch(searchQuery, category, selectedTags)
  }

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]

    setSelectedTags(newTags)
    updateURL(searchQuery, selectedCategory, newTags)
    performSearch(searchQuery, selectedCategory, newTags)
  }

  const clearAllFilters = () => {
    setSelectedCategory(null)
    setSelectedTags([])
    setSearchQuery("")
    router.push('/search')
    performSearch("", null, [])
  }

  const handleArticleClick = (slug: string) => {
    router.push(`/articles/${slug}`)
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Search Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Search Articles & Guides</h1>
          <p className="text-muted-foreground text-lg">
            Find the latest insights on crypto, finance, and investing from our library of {allArticles.length}+ articles
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="search"
              placeholder="Search for articles, guides, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-12 h-12 text-lg"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </form>

        {/* Filter Controls */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
              {(selectedCategory || selectedTags.length > 0) && (
                <Badge variant="secondary" className="ml-2">
                  {(selectedCategory ? 1 : 0) + selectedTags.length}
                </Badge>
              )}
            </Button>

            {(selectedCategory || selectedTags.length > 0 || searchQuery) && (
              <Button variant="ghost" onClick={clearAllFilters} className="text-sm">
                <X className="h-4 w-4 mr-2" />
                Clear all
              </Button>
            )}
          </div>

          {showFilters && (
            <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 space-y-6">
              {/* Category Filters */}
              <div>
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    onClick={() => handleCategoryFilter(null)}
                    size="sm"
                  >
                    All Categories
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => handleCategoryFilter(category)}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="font-semibold mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 20).map((tag) => (
                    <Button
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      onClick={() => handleTagToggle(tag)}
                      size="sm"
                      className="text-xs"
                    >
                      {tag}
                      {selectedTags.includes(tag) && (
                        <X className="h-3 w-3 ml-1" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Active Filters Display */}
        {(selectedCategory || selectedTags.length > 0) && (
          <div className="mb-6 flex flex-wrap gap-2">
            {selectedCategory && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Category: {selectedCategory}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleCategoryFilter(null)}
                />
              </Badge>
            )}
            {selectedTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                Tag: {tag}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleTagToggle(tag)}
                />
              </Badge>
            ))}
          </div>
        )}

        {/* Search Results */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {isLoading ? "Searching..." : (
              <>
                {filteredArticles.length} result{filteredArticles.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory && ` in ${selectedCategory}`}
                {selectedTags.length > 0 && ` with tags: ${selectedTags.join(', ')}`}
              </>
            )}
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-muted h-48 md:h-auto"></div>
                  <CardContent className="md:w-2/3 p-6">
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-6 bg-muted rounded mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                    <div className="flex space-x-4">
                      <div className="h-4 bg-muted rounded w-20"></div>
                      <div className="h-4 bg-muted rounded w-20"></div>
                      <div className="h-4 bg-muted rounded w-20"></div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="group hover:scale-[1.02] transition-all duration-300 bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden cursor-pointer hover:shadow-lg"
                onClick={() => handleArticleClick(article.slug)}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="md:w-2/3 p-6">
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{article.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms, removing filters, or browse our categories
              </p>
              <Button onClick={clearAllFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Search Tips */}
        {!searchQuery && filteredArticles.length === allArticles.length && (
          <div className="mt-12 bg-card/30 backdrop-blur-sm border rounded-lg p-6">
            <h3 className="font-semibold mb-3">Search Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Use specific keywords like "MetaMask", "Bitcoin", or "DeFi"</li>
              <li>• Filter by categories to narrow down results</li>
              <li>• Use tags to find articles on specific topics</li>
              <li>• Search by author name to find articles from specific writers</li>
              <li>• Try different spellings or related terms</li>
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-crypto-pattern">
      <Header />
      <Suspense fallback={
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading search...</p>
          </div>
        </main>
      }>
        <SearchContent />
      </Suspense>
      <Footer />
    </div>
  )
}
