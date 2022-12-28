import { Card, CardBody } from '@material-tailwind/react'

export default function HomeEngineering() {
    return (
        <div className="container my-2">
            <Card className='h-full relative bg-[url(../public/images/code-sample.jpg)] bg-cover bg-center bg-no-repeat'>
                <div
                    className='absolute inset-0 bg-white/10 sm:bg-transparent sm:bg-gradient-to-l sm:from-white/95 sm:to-white/10'
                ></div>
                <CardBody className='relative py-32 md:flex lg:h-screen md:items-center md:justify-end lg:px-8'>
                    <div className='text-center sm:text-right'>
                        <h1 className='text-3xl font-extrabold sm:text-5xl text-deep-purple-700'>
                            Software
                            <strong className='block font-extrabold text-black'>
                                Engineering
                            </strong>
                        </h1>
                        <p className='mt-4 bg-white rounded-xl max-w-lg sm:text-xl sm:leading-relaxed'>
                            Writing clean and maintainable code that gets the job done. Limit overhead and increase productivity.
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}