import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Faq() {
  return (
    <div>
         <Navbar />
         <main class="page faq-page">
        <section class="clean-block clean-faq dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">FAQ</h2>
                    <p>In our FAQ section, we address common questions and concerns about Susipwin Tuition Center. Find answers to queries about our class timings, fee structure, enrollment process, and more. We aim to provide clear and concise information to help parents and students make informed decisions about their educational journey with us.</p>
                </div>
                <div class="accordion" role="tablist" id="accordion-1">
                    <div class="accordion-item">
                        <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="false" aria-controls="accordion-1 .item-1">What grade levels does Susipwin Tuition Class cater to?</button></h2>
                        <div class="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-1">
                            <div class="accordion-body">
                                <p class="mb-0">Susipwin Tuition Class offers classes for students from Grade 6 to Grade 13</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">How experienced are the instructors at Susipwin Tuition Class?</button></h2>
                        <div class="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                            <div class="accordion-body">
                                <p class="mb-0">We have a team of highly qualified and experienced instructors who specialize in their&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" role="tab"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="true" aria-controls="accordion-1 .item-3">Is personalized learning available at Susipwin Tuition Class?</button></h2>
                        <div class="accordion-collapse collapse show item-3" role="tabpanel" data-bs-parent="#accordion-1">
                            <div class="accordion-body">
                                <p class="mb-0">Yes, we provide personalized learning programs tailored to meet the individual needs and academic goals of each student.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </div>
  )
}

export default Faq