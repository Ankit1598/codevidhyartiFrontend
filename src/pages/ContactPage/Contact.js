import React from 'react'
import {heroData} from './Data'
import { HeroSection, ContactDetails } from '../../components'

const Contact = () => {
	return (
		<>
			<HeroSection {...heroData} />
			<ContactDetails />
		</>
	)
}

export default Contact
