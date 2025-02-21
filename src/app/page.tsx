import Image from "next/image"
import Link from "next/link"
import { Search, Heart, ShoppingCart, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

        {/* Top Bar */}
          <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm py-2">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center sm:text-left">
                <span>+025-95-35-94</span>
                <span className="hidden sm:inline">email@email.com</span>
                <span className="hidden md:inline">1734 Stonecoal Road</span>
              </div>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <span>USD</span>
                <span>My Account</span>
              </div>
            </div>
          </div>

        {/* Header */}
          <header className="bg-[#1a1a1a] text-white py-4">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between gap-4">
                <Link href="/" className="text-2xl font-bold">
                  Electro<span className="text-red-600">.</span>
                </Link>

                <div className="hidden md:flex flex-1 max-w-2xl">
                  <div className="flex w-full">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px] rounded-r-none bg-white text-black">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="laptops">Laptops</SelectItem>
                        <SelectItem value="smartphones">Smartphones</SelectItem>
                        <SelectItem value="cameras">Cameras</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex-1 flex">
                      <Input placeholder="Search here" className="rounded-none border-l-0 border-r-0" />
                      <Button variant="destructive" className="rounded-l-none">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="relative">
                    <Heart className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                  <div className="relative">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </span>
                  </div>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Mobile Search */}
              <div className="mt-4 md:hidden">
                <div className="flex">
                  <Input placeholder="Search here" className="rounded-r-none" />
                  <Button variant="destructive" className="rounded-l-none">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

        {/* Navigation */}
          <nav className="border-b overflow-x-auto">
            <div className="container mx-auto px-4">
              <ul className="flex gap-4 sm:gap-8 py-4 whitespace-nowrap">
                <li>
                  <Link href="/" className="text-red-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/hot-deals" className="text-gray-600 hover:text-red-600">
                    Hot Deals
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-gray-600 hover:text-red-600">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/laptops" className="text-gray-600 hover:text-red-600">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link href="/smartphones" className="text-gray-600 hover:text-red-600">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link href="/cameras" className="text-gray-600 hover:text-red-600">
                    Cameras
                  </Link>
                </li>
                <li>
                  <Link href="/accessories" className="text-gray-600 hover:text-red-600">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

        {/* Hero Section */}
          <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative bg-red-600 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Laptop Collection"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 sm:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent p-6 flex flex-col justify-center">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Laptop Collection</h3>
                  <Button variant="outline" size="sm" className="w-fit">
                    SHOP NOW
                  </Button>
                </div>
              </div>
              <div className="relative bg-red-600 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Accessories Collection"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 sm:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent p-6 flex flex-col justify-center">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Accessories Collection</h3>
                  <Button variant="outline" size="sm" className="w-fit">
                    SHOP NOW
                  </Button>
                </div>
              </div>
              <div className="relative bg-red-600 rounded-lg overflow-hidden sm:col-span-2 lg:col-span-1">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Cameras Collection"
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 sm:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-transparent p-6 flex flex-col justify-center">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Cameras Collection</h3>
                  <Button variant="outline" size="sm" className="w-fit">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </section>

        {/* Products Section */}
          <section className="container mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold">NEW PRODUCTS</h2>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <Button variant="link" className="text-red-600 p-0 h-auto">
                  Laptops
                </Button>
                <Button variant="link" className="p-0 h-auto">
                  Smartphones
                </Button>
                <Button variant="link" className="p-0 h-auto">
                  Cameras
                </Button>
                <Button variant="link" className="p-0 h-auto">
                  Accessories
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border rounded-lg p-4 group">
                  <div className="relative aspect-square mb-4">
                    <Image src="/placeholder.svg?height=300&width=300" alt="Product" fill className="object-contain" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">CATEGORY</p>
                    <h3 className="font-semibold">PRODUCT NAME GOES HERE</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold">$980.00</span>
                      <span className="text-gray-500 line-through text-sm">$990.00</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        {/* Hot Deal Section */}
          <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold">HOT DEAL THIS WEEK</h2>
                  <p className="text-lg sm:text-xl">NEW COLLECTION UP TO 50% OFF</p>
                  <div className="flex justify-center lg:justify-start gap-4">
                    {[
                      { value: "02", label: "DAYS" },
                      { value: "10", label: "HOURS" },
                      { value: "34", label: "MIN" },
                      { value: "60", label: "SEC" },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-sm sm:text-xl font-bold">
                          {item.value}
                        </div>
                        <p className="mt-2 text-xs sm:text-sm">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="destructive" size="lg">
                    SHOP NOW
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Hot Deal"
                  width={600}
                  height={400}
                  className="w-full max-w-md lg:max-w-lg"
                />
              </div>
            </div>
          </section>
          
    </div>
  );
}
