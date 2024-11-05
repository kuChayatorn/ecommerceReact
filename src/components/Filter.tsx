import React from 'react'

const Filter = () => {
    const options = ['a', 'b', 'c', 'd']

    return (
        <div className='flex w-full flex-col justify-center px-10 lg:px-20 mt-10'>
            <div className='flex basis-1/2 flex-col pl-8 font-bold text-xl'>
                <p>Bottoms</p>
            </div>
            <div className='basis-1/2 flex flex-row items-end'>
                <div className='flex flex-row basis-1/2 gap-2'>
                    <div className='flex flex-row pl-8'>
                        <p>Filter</p>
                        <select className='ml-2 w-20 justify-center text-center'>
                            {options.map((option) => <option key={option}>{option}</option>)}
                        </select>
                    </div>
                    <div className='flex flex-row'>
                        <p>prices</p>
                        <select className='ml-2 w-20 justify-center text-center'>
                            {options.map((option) => <option key={option}>{option}</option>)}
                        </select>
                    </div>
                </div>
                <div className='flex flex-row basis-1/2 gap-2 justify-end pr-8'>
                    <p>Sort by:</p>
                    <select className='ml-2 w-20 justify-start pl-2 text-start'>
                        {options.map((option) => <option key={option}>{option}</option>)}
                    </select>
                    <p> 20 products</p>
                </div>
            </div>
        </div>
    )
}

export default Filter