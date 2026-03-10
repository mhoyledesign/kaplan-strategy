import { useState, useEffect, useCallback } from 'react'
import { TopNav } from './components/TopNav'
import { Dashboard } from './pages/Dashboard'
import { Discovery } from './pages/Discovery'
import { UsersContext } from './pages/UsersContext'
import { InformationArchitecture } from './pages/InformationArchitecture'
import { TechLandscape } from './pages/TechLandscape'
import { UXDirection } from './pages/UXDirection'
import { PrototypeReview } from './pages/PrototypeReview'
import { NewPrototypeReview } from './pages/NewPrototypeReview'
import { RisksNextSteps } from './pages/RisksNextSteps'
import { getParam, setParams } from './useUrlState'

export type Page = 'dashboard' | 'discovery' | 'users' | 'architecture' | 'tech' | 'ux' | 'prototype' | 'new-prototype' | 'risks'

const validPages: Page[] = ['dashboard', 'discovery', 'users', 'architecture', 'tech', 'ux', 'prototype', 'new-prototype', 'risks']

function readPageFromUrl(): Page {
  const p = getParam('page')
  return validPages.includes(p as Page) ? (p as Page) : 'dashboard'
}

export default function App() {
  const [page, setPage] = useState<Page>(readPageFromUrl)

  const handleNavigate = useCallback((p: Page) => {
    setPage(p)
    setParams({
      page: p === 'dashboard' ? null : p,
      tab: null,
    })
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onPopState = () => setPage(readPageFromUrl())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const renderPage = () => {
    switch (page) {
      case 'dashboard': return <Dashboard onNavigate={handleNavigate} />
      case 'discovery': return <Discovery />
      case 'users': return <UsersContext />
      case 'architecture': return <InformationArchitecture />
      case 'tech': return <TechLandscape />
      case 'ux': return <UXDirection />
      case 'prototype': return <PrototypeReview />
      case 'new-prototype': return <NewPrototypeReview />
      case 'risks': return <RisksNextSteps />
    }
  }

  return (
    <div className="flex flex-col h-full w-full">
      <main className="flex-1 overflow-y-auto pb-24 lg:pb-28">
        {renderPage()}
      </main>
      <TopNav activePage={page} onNavigate={handleNavigate} />
    </div>
  )
}
