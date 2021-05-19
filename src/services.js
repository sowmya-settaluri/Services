
import Content from './content';

const Services = () => {


  return ( 
    <div className="services-component">
      <section id="service" className="services-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title pb-10">
                        <h4 className="title">Crafted For</h4>
                        <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="services-content mt-40 d-sm-flex">
                                <div className="services-icon">
                                    <i className="lni-bolt"></i>
                                </div>
                               <Content heading={'Startup'}/>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="services-content mt-40 d-sm-flex">
                                <div className="services-icon">
                                    <i className="lni-bar-chart"></i>
                                </div>
                              <Content heading={'SaaS Business'}/>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="services-content mt-40 d-sm-flex">
                                <div className="services-icon">
                                    <i className="lni-brush"></i>
                                </div>
                               <Content heading={'Agency'}/>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="services-content mt-40 d-sm-flex">
                                <div className="services-icon">
                                    <i className="lni-bulb"></i>
                                </div>
                                <Content heading={'App Landing'}/>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
        <div className="services-image d-lg-flex align-items-center">
            <div className="image">
                <img src="https://preview.uideck.com/items/start/assets/images/services.png" alt="Services" ></img>
            </div>
        </div> 
    </section>
    </div>
   );
}
 
export default Services;