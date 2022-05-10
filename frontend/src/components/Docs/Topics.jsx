import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { apiip } from '../../serverConfig'
export default function Topics() {
    const [Docs, setDocs] = useState([])
    useEffect(() => {
        var config = {
            method: 'get',
            url: `${apiip}/docs/api/docs`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                if (response.data.status === "ok") {
                    console.log(response.data.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [axios])

    return (
        <div className='topics'>
            <h1>Welcome to Docs</h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            {/* <ul>


                <li data-nav-id="/products/platform/" class="dd-item">
                    <div>
                        <Link to="/products/platform/">

                            <img src="/images/icons/platform.svg" width="24" height="24" class="icon" />

                            <span>Platform Overview</span>

                        </Link>


                    </div>

                </li>

                <li data-nav-id="/products/compute/" class="dd-item alwaysopen">
                    <div>
                        <Link to="/products/compute/">

                            <img src="/images/icons/compute.svg" width="24" height="24" class="icon" />

                            <span>Compute</span>

                        </Link>


                    </div>

                    <ul>
                        <li data-nav-id="/products/droplets/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/droplets/">

                                    <img src="/images/icons/droplets.svg" width="24" height="24" class="icon" />

                                    <span>Droplets</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/app-platform/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/app-platform/">

                                    <img src="/images/icons/app-platform.svg" width="24" height="24" class="icon" />

                                    <span>App Platform</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/kubernetes/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/kubernetes/">

                                    <img src="/images/icons/kubernetes.svg" width="24" height="24" class="icon" />

                                    <span>Kubernetes</span>

                                </Link>


                            </div>

                        </li>
                    </ul></li>

                <li data-nav-id="/products/storage/" class="dd-item alwaysopen">
                    <div>
                        <Link to="/products/storage/">

                            <img src="/images/icons/storage.svg" width="24" height="24" class="icon" />

                            <span>Storage</span>

                        </Link>


                    </div>

                    <ul>
                        <li data-nav-id="/products/volumes/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/volumes/">

                                    <img src="/images/icons/volumes.svg" width="24" height="24" class="icon" />

                                    <span>Block Storage Volumes</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/spaces/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/spaces/">

                                    <img src="/images/icons/spaces.svg" width="24" height="24" class="icon" />

                                    <span>Spaces</span>

                                </Link>


                            </div>

                        </li>
                    </ul></li>

                <li data-nav-id="/products/images/" class="dd-item">
                    <div>
                        <Link to="/products/images/">

                            <img src="/images/icons/images.svg" width="24" height="24" class="icon" />

                            <span>Containers &amp; Images</span>

                        </Link>


                    </div>

                </li>

                <li data-nav-id="/products/databases/" class="dd-item">
                    <div>
                        <Link to="/products/databases/">

                            <img src="/images/icons/databases.svg" width="24" height="24" class="icon" />

                            <span>Managed Databases</span>

                        </Link>


                    </div>

                </li>

                <li data-nav-id="/products/networking/" class="dd-item alwaysopen">
                    <div>
                        <Link to="/products/networking/">

                            <img src="/images/icons/networking.svg" width="24" height="24" class="icon" />

                            <span>Networking</span>

                        </Link>


                    </div>

                    <ul>
                        <li data-nav-id="/products/networking/dns/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/networking/dns/">

                                    <img src="/images/icons/dns.svg" width="24" height="24" class="icon" />

                                    <span>Domains and DNS</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/networking/floating-ips/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/networking/floating-ips/">

                                    <img src="/images/icons/floating-ips.svg" width="24" height="24" class="icon" />

                                    <span>Floating IPs</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/networking/load-balancers/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/networking/load-balancers/">

                                    <img src="/images/icons/load-balancers.svg" width="24" height="24" class="icon" />

                                    <span>Load Balancers</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/networking/firewalls/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/networking/firewalls/">

                                    <img src="/images/icons/firewalls.svg" width="24" height="24" class="icon" />

                                    <span>Cloud Firewalls</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/networking/ipv6/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/networking/ipv6/">

                                    <img src="/images/icons/ipv6.svg" width="24" height="24" class="icon" />

                                    <span>IPv6</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/networking/vpc/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/networking/vpc/">

                                    <img src="/images/icons/vpc.svg" width="24" height="24" class="icon" />

                                    <span>VPC</span>

                                </Link>


                            </div>

                        </li>
                    </ul></li>

                <li data-nav-id="/products/management/" class="dd-item alwaysopen">
                    <div>
                        <Link to="/products/management/">

                            <img src="/images/icons/management.svg" width="24" height="24" class="icon" />

                            <span>Management</span>

                        </Link>


                    </div>

                    <ul>
                        <li data-nav-id="/products/projects/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/projects/">

                                    <img src="/images/icons/projects.svg" width="24" height="24" class="icon" />

                                    <span>Projects</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/monitoring/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/monitoring/">

                                    <img src="/images/icons/monitoring.svg" width="24" height="24" class="icon" />

                                    <span>Monitoring</span>

                                </Link>


                            </div>

                        </li>

                        <li data-nav-id="/products/accounts/teams/" class="dd-item alwaysopen">
                            <div>
                                <Link to="/products/accounts/teams/">

                                    <img src="/images/icons/teams.svg" width="24" height="24" class="icon" />

                                    <span>Teams</span>

                                </Link>


                            </div>

                        </li>
                    </ul>
                </li>
            </ul> */}
        </div>
    )
}
