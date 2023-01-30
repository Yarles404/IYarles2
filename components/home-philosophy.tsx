/* eslint-disable react/no-unescaped-entities */
import { Card, CardBody } from '@material-tailwind/react'


export default function HomePhilosophy() {
    return (
        <div className="container my-2 lg:px-8">
            <Card className='h-full'>
                <div
                    className='absolute inset-0 sm:bg-transparent'
                ></div>
                <CardBody className='text-center md:flex-colmd:justify-center md:items-center lg:px-8'>
                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-5xl text-deep-purple-700'>
                            Central&nbsp;
                            <strong className='block sm:inline font-extrabold text-black'>
                                Philosophy
                            </strong>
                        </h1>
                        <p className='mt-4 bg-white rounded-xl sm:text-xl sm:leading-relaxed'>
                            Questions I ask in every solution, project, and task
                        </p>
                    </div>
                    <div className="container py-4">
                        <div className="grid sm:grid-cols-2 gap-8 divide-y">
                            <div>
                                <h1 className='text-xl font-bold'>What are the requirements?</h1>
                                <p>
                                    Ask the right questions. Turn business needs into technical requirements.
                                    Getting the requirements right for effortless maintenance and smooth scaling.
                                    Avoid costly rewrites, spaghetti code, infrastructural migrations, and other headaches.
                                </p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>What is the team comfortable with?</h1>
                                <p>
                                    Write software to meet the requirements, not to use the latest and greatest JS framework.
                                    What's a suitable language? framework? database? Can the team move fast with the given technologies?
                                    Leverage the team's strengths to drive business value.
                                </p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>How will it scale?</h1>
                                <p>
                                    Determine the network and storage requirements.
                                    Will traffic steadily increase? How will storage grow? What's our read-write ratio? Are there traffic spikes or is it consistent?
                                    Avoid technical headaches by planning for the future.
                                </p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>How can it be maintanable?</h1>
                                <p>
                                    Use existing industry standards and best practices for designing software & systems.
                                    Write "self-documenting" code. Create a logical data model.
                                    Write tests, version control best practicies, and configure CI/CD.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
