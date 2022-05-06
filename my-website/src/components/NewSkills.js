import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useOnScreen from '../../hooks/useOnScreen';
import './style.scss';
// gsap.registerPlugin(ScrollTrigger);

const images = [
	{
		src: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100',
		title: 'Dracaena Trifasciata',
		subtitle: 'Live the Beauty',
		category: 'Shooting / Adv.Campaing',
	},
	{
		src: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100',
		title: 'Cereus Penuvianus',
		subtitle: 'Live the Beauty',
		category: 'Shooting / Adv.Campaing',
	},
	{
		src: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100',
		title: 'Calliope',
		subtitle: 'Live the Beauty',
		category: 'Shooting / Adv.Campaing',
	},
	{
		src: 'https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100',
		title: 'Golden Pothos',
		subtitle: 'Living Room',
		category: 'Shooting / Adv.Campaing',
	},
];


function NewSkills({ src, title, subtitle, category, index, updateActiveImage }) {
  return (
    <div>NewSkills</div>
  )
}

export default NewSkills