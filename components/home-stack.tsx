import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from '@material-tailwind/react'

export default function HomeStack(): JSX.Element {
    return (
        <section className='my-2 container'>
            <div className='text-center mb-4'>
                <h1 className='text-3xl font-extrabold sm:text-5xl text-deep-purple-700'>
                    Technology&nbsp;
                    <strong className='font-extrabold text-black'>
                        Stack
                    </strong>
                </h1>
            </div>
            <div className='grid justify-items-center sm:grid-cols-2 md:grid-cols-3 sm:gap-4'>
                <Card className='w-96'>
                    <CardHeader floated={false} className='h-96'>
                        <img className='h-full w-full'  src='/images/nextjs.png' alt='next.js logo' />
                    </CardHeader>
                    <CardBody className='text-center'>
                        <Typography variant='h4' color='blue-gray' className='mb-2'>
                            Next.js with TypeScript
                        </Typography>
                        <Typography color='blue' className='font-medium' textGradient>
                            Web framework of choice
                        </Typography>
                    </CardBody>
                </Card>
                <Card className='w-96'>
                    <CardHeader floated={false} className='h-96'>
                        <img className='h-full w-full' src='/images/tailwind-css.png' alt='tailwind css logo' />
                    </CardHeader>
                    <CardBody className='text-center'>
                        <Typography variant='h4' color='blue-gray' className='mb-2'>
                            Tailwind CSS
                        </Typography>
                        <Typography color='blue' className='font-medium' textGradient>
                            For <u>style!</u>
                        </Typography>
                    </CardBody>
                </Card>
                <Card className='w-96'>
                    <CardHeader floated={false} className='h-96'>
                        <img className='h-full w-full' src='/images/material-tailwind.png' alt='material tailwind logo' />
                    </CardHeader>
                    <CardBody className='text-center'>
                        <Typography variant='h4' color='blue-gray' className='mb-2'>
                            Material Tailwind
                        </Typography>
                        <Typography color='blue' className='font-medium' textGradient>
                            Convenient Tailwind CSS components
                        </Typography>
                    </CardBody>
                </Card>
                <Card className='w-96'>
                    <CardHeader floated={false} className='h-96'>
                        <img className='h-full w-full' src='/images/github-actions.png' alt='github actions logo' />
                    </CardHeader>
                    <CardBody className='text-center'>
                        <Typography variant='h4' color='blue-gray' className='mb-2'>
                            Github Actions
                        </Typography>
                        <Typography color='blue' className='font-medium' textGradient>
                            Continous deployment
                        </Typography>
                    </CardBody>
                </Card>
                <Card className='w-96'>
                    <CardHeader floated={false} className='h-96'>
                        <img className='h-full w-full' src='/images/aws-cdk.png' alt='aws cdk logo' />
                    </CardHeader>
                    <CardBody className='text-center'>
                        <Typography variant='h4' color='blue-gray' className='mb-2'>
                            AWS CDK
                        </Typography>
                        <Typography color='blue' className='font-medium' textGradient>
                            AWS Infrastructure as Code (IaC)
                        </Typography>
                    </CardBody>
                </Card>
                <Card className='w-96'>
                    <CardHeader floated={false} className='h-96'>
                        <img className='h-full w-full' src='/images/aws.png' alt='aws logo' />
                    </CardHeader>
                    <CardBody className='text-center'>
                        <Typography variant='h4' color='blue-gray' className='mb-2'>
                            Amazon Web Services
                        </Typography>
                        <Typography color='blue' className='font-medium' textGradient>
                            Cloud platform of choice
                        </Typography>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}