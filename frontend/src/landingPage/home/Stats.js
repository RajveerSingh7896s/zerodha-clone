import React from 'react';

function Stats() {
    return ( 
        <div className='container px-3 section-y'>
            <div className='row g-4 align-items-start'>
                <div className='col-12 col-lg-6 p-3 p-lg-4'>
                    <h1 className='pb-4 h2'>Trust with confidence</h1>
                    <h2 className='fs-5'>Customer-first always</h2>
                    <p className='text-muted'>That&apos;s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-5 mt-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, &quot;gamification&quot;, or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-5 mt-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-5 mt-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don&apos;t just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-12 col-lg-6 p-3 p-lg-4'>
                    <img src='media/images/ecosystem.png' alt='Zerodha ecosystem' className='img-ecosystem' />
                    <div className='text-center stats-cta mt-4'>
                        <a href='' className='anchorTag'>Explore our products <i className="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' className='anchorTag'>Try Kite demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;
