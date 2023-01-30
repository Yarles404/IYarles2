import { Card, CardBody } from '@material-tailwind/react'


export default function HomePhilosophy() {
    return (
        <div className="container my-2 lg:h-screen lg:px-8">
            <Card className='h-full relative'>
                <div
                    className='absolute inset-0 bg-white/10 sm:bg-transparent sm:bg-gradient-to-l sm:from-white/95 sm:to-white/10'
                ></div>
                <CardBody className='relative md:flex lg:h-screen md:justify-center lg:px-8'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-extrabold sm:text-5xl text-deep-purple-700'>
                            Central&nbsp;
                            <strong className='block sm:inline font-extrabold text-black'>
                                Philosophy
                            </strong>
                        </h1>
                        <p className='mt-4 bg-white rounded-xl max-w-lg sm:text-xl sm:leading-relaxed'>
                            Questions I ask in every solution, project, and task
                        </p>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
