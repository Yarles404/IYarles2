export default function HomeHero(): JSX.Element {
    return (
        <section
            className='rounded-lg my-2 relative bg-[url(../public/images/senior-photo.jpg)] bg-cover bg-center bg-no-repeat'
        >
            <div
                className='absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25'
            ></div>
            <div
                className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'
            >
                <div className='max-w-xl text-center sm:text-left'>
                    <h1 className='text-3xl font-extrabold sm:text-5xl text-deep-purple-700'>
                        Charles
                        <strong className='block font-extrabold text-black'>
                            Yang
                        </strong>
                    </h1>
                    <p className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed'>
                        Software engineering, architecture, and infrastructure enthusiast helping companies build.
                    </p>
                    <div className='mt-8 flex flex-wrap gap-4 text-center'>
                        <a
                            href='#'
                            className='block w-full rounded bg-deep-purple-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-deep-purple-800 focus:outline-none focus:ring active:bg-deep-purple-600 sm:w-auto'
                        >
                            Contact
                        </a>
                        <a
                            href='#'
                            className='block w-full rounded bg-white px-12 py-3 text-sm font-medium text-deep-purple-700 shadow hover:text-deep-purple-800 focus:outline-none focus:ring active:text-deep-purple-600 sm:w-auto'
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}