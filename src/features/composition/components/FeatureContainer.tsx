import  { type ReactNode } from 'react'

interface FeatureContainerProps{
    title: string;
    children: ReactNode;
}

const FeatureContainer = ({title,children}:FeatureContainerProps) => {
  return (
    <div className='bg-blue-300 p-6 rounded-2xl'>
      <h2 className='text-3xl font-bold text-gray-700'>{title}</h2>
      <div className='mt-4 flex flex-col gap-3'>{children}</div>
    </div>
  )
}

export default FeatureContainer
