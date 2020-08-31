import React, { Component } from 'react'

export default class ListingCard extends Component {
    render() {
        return (
            <div class="ui raised link card">

                <div class="ui slide masked reveal image">

                    <img src={this.props.listing.image} class="visible content" ></img>
                    <img src={this.props.listing.image_2} class="hidden content" ></img>

                </div>

                <div class="content">

                    <div class="left aligned description">
                        {this.props.listing.bedrooms} bedrooms
                    </div>

                    {
                        this.props.listing.half_bathrooms > 1 ?
                        <div class="center aligned description">
                            {this.props.listing.half_bathrooms} half-baths
                        </div>
                        :
                        <div class="center aligned description">
                            {this.props.listing.half_bathrooms} half-bath
                        </div>
                    }

                    {
                        this.props.listing.full_bathrooms > 1 ?
                        <div class="right aligned description">
                            {this.props.listing.full_bathrooms} full-baths
                        </div>
                        :
                        <div class="right aligned description">
                            {this.props.listing.full_bathrooms} full-bath
                        </div>
                    }

                    <div class="meta">
                        {this.props.listing.street_name}, {this.props.listing.city} {this.props.listing.state}, {this.props.listing.zip_code}
                    </div>

                </div>

                <div class="extra content">

                    <div class="left aligned">

                        <div>
                            <h1>${this.props.listing.purchase_price}</h1>
                        </div>

                    </div>

                    <div class="right aligned">

                    {
                        this.props.listing.pet_friendly 
                        ?
                        <p>{this.props.listing.pet_size} pets allowed</p>
                        :
                        null
                    }

                    {
                        this.props.listing.pet_friendly 
                        ?
                        <i class="paw icon"></i>
                        :
                        null
                    }

                    </div>

                </div>
            </div>
        )
    }
}
