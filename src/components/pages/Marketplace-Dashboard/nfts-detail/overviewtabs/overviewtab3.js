import React, { Component } from 'react'
import CollectImg1 from '../../../../../assets/images/collection-img1.png'
import CollectImg2 from '../../../../../assets/images/collection-img2.png'
import CollectImg3 from '../../../../../assets/images/collection-img3.png'
import CollectImg4 from '../../../../../assets/images/collection-img4.png'
import CollectImg5 from '../../../../../assets/images/collection-img5.png'
//import CollectImg6 from '../../../../../assets/images/collection-img6.png'

export default class OverviewTab1 extends Component {
    render() {
        return (
            <div>
                <div className='latestBidBx'>
                    <h3>Latest Bids</h3>
                    <ul>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg1} alt="" /></i>
                                <strong>Reese Hoffman</strong>
                                <small>Floor: 0.25 KDA <a href=''>Floor Bid</a></small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>24h</small>
                            </div>
                        </li>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg2} alt="" /></i>
                                <strong>Reese Hoffman</strong>
                                <small>Floor: 0.25 KDA <a href=''>Floor Bid</a></small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>24h</small>
                            </div>
                        </li>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg3} alt="" /></i>
                                <strong>Reese Hoffman</strong>
                                <small>Floor: 0.25 KDA <a href=''>Floor Bid</a></small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>24h</small>
                            </div>
                        </li>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg4} alt="" /></i>
                                <strong>Reese Hoffman</strong>
                                <small>Floor: 0.25 KDA <a href=''>Floor Bid</a></small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>24h</small>
                            </div>
                        </li>
                        <li>
                            <div className='collectionLeft'>
                                <i><img src={CollectImg5} alt="" /></i>
                                <strong>Reese Hoffman</strong>
                                <small>Floor: 0.25 KDA <a href=''>Floor Bid</a></small>
                            </div>
                            <div className='collectionRight'>
                                <strong>6.8 KDA</strong>
                                <small>24h</small>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }

}