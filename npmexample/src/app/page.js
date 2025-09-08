"use client"

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-light text-gray-900 mb-3">
            Hillnote Wiki
          </h1>
          <p className="text-gray-500">
            Simple documentation system
          </p>
        </div>

        <div className="space-y-3">
          <Link 
            href="/doc" 
            className="block bg-white rounded-lg px-6 py-4 hover:shadow-sm transition-shadow border border-gray-100"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">Documentation</h3>
                <p className="text-sm text-gray-500 mt-1">Browse wiki pages</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </Link>

          <Link 
            href="/api/ai-sitemap" 
            className="block bg-white rounded-lg px-6 py-4 hover:shadow-sm transition-shadow border border-gray-100"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">AI API</h3>
                <p className="text-sm text-gray-500 mt-1">Structured data endpoint</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </Link>

          <Link 
            href="/sitemap.xml" 
            className="block bg-white rounded-lg px-6 py-4 hover:shadow-sm transition-shadow border border-gray-100"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">Sitemap</h3>
                <p className="text-sm text-gray-500 mt-1">XML for search engines</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-gray-400">
            Powered by @hillnote/wiki
          </p>
        </div>
      </div>
    </div>
  )
}