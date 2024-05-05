import React from 'react'

function Testimonials({ msg, img, name, role }) {
    return (
        <section className="relative flex flex-col rounded-lg justify-between min-h-[330px] w-[90%] lg:max-w-[30%] bg-GreenMist px-6 py-8 lg:px-8">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                    {msg}
                </p>
            </blockquote>
            <figcaption className="mt-10">
                <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src={img}
                    alt="img"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">{name}</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600">{role}</div>
                </div>
            </figcaption>
        </section>
    )
}

export default Testimonials
