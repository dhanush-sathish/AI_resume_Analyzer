import React from 'react'
import { cn } from '~/lib/utils'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from './Accordion'

interface Tip {
  type: 'good' | 'improve'
  tip: string
  explanation: string
}

interface CategoryData {
  score: number
  tips: Tip[]
}

interface Feedback {
  toneAndStyle: CategoryData
  content: CategoryData
  structure: CategoryData
  skills: CategoryData
}

interface DetailsProps {
  feedback: Feedback
}

// ScoreBadge Component
interface ScoreBadgeProps {
  score: number
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const getBgColor = () => {
    if (score > 69) return 'bg-green-100'
    if (score > 39) return 'bg-yellow-100'
    return 'bg-red-100'
  }

  const getTextColor = () => {
    if (score > 69) return 'text-green-700'
    if (score > 39) return 'text-yellow-700'
    return 'text-red-700'
  }

  const getCheckIcon = () => {
    if (score > 69)
      return (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )
    return null
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold',
        getBgColor(),
        getTextColor()
      )}
    >
      {getCheckIcon()}
      <span>{score}/100</span>
    </div>
  )
}

// CategoryHeader Component
interface CategoryHeaderProps {
  title: string
  categoryScore: number
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  categoryScore,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <ScoreBadge score={categoryScore} />
    </div>
  )
}

// CategoryContent Component
interface CategoryContentProps {
  tips: Tip[]
}

const CategoryContent: React.FC<CategoryContentProps> = ({ tips }) => {
  return (
    <div className="space-y-4">
      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
          >
            {tip.type === 'good' ? (
              <svg
                className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="text-sm text-gray-700 font-medium">{tip.tip}</span>
          </div>
        ))}
      </div>

      {/* Explanation Boxes */}
      <div className="space-y-2">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={cn(
              'p-3 rounded-lg border-l-4',
              tip.type === 'good'
                ? 'bg-green-50 border-green-400'
                : 'bg-yellow-50 border-yellow-400'
            )}
          >
            <p
              className={cn(
                'text-sm',
                tip.type === 'good'
                  ? 'text-green-800'
                  : 'text-yellow-800'
              )}
            >
              {tip.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Details Component
const Details: React.FC<DetailsProps> = ({ feedback }) => {
  const categories = [
    {
      id: 'tone-style',
      title: 'Tone & Style',
      ...feedback.toneAndStyle,
    },
    {
      id: 'content',
      title: 'Content',
      ...feedback.content,
    },
    {
      id: 'structure',
      title: 'Structure',
      ...feedback.structure,
    },
    {
      id: 'skills',
      title: 'Skills',
      ...feedback.skills,
    },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume Details</h2>
      
      <Accordion allowMultiple className="space-y-3">
        {categories.map((category) => (
          <AccordionItem
            key={category.id}
            id={category.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <AccordionHeader itemId={category.id} className="hover:bg-gray-50">
              <CategoryHeader
                title={category.title}
                categoryScore={category.score}
              />
            </AccordionHeader>
            <AccordionContent itemId={category.id}>
              <CategoryContent tips={category.tips} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Details