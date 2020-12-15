import React from 'react';
// import {TrainerContext} from '../context/TrainerContext';
import Menu from './Menu';
import "./AboutHome.css"

import { GiMuscleUp, GiKnifeFork, GiHeartBeats, GiRobe } from 'react-icons/gi';

const AboutHome = () => {
	// const value  = React.useContext(TrainerContext);
	return (
		<section className="about-home">
			<Menu />
			<h1 className="about-home__heading">who are we</h1>
			<p className="about-home__block">
				<span className="leads">We</span>, at FitClick are{' '}
				<strong>the most effective lifestyle studio</strong> in the country.We,
				at ClickFit, believe in living healthy and happy. Our focus is to help
				you guide you to a better life style. We focus on nutrition, cross-fit
				exercise, endurance training, increasing positivity in life and much
				more. Our trainers are there to help you whenever you need. They will
				guide you, mentor you, motivate you and help you become the best YOU.
			</p>
			<h1 className="about-home__heading about-home__heading--sub">Our Goal</h1>
			<p className="about-home__block">
				We, at FitClick, promise you to help you become healthy, fit, energetic,
				mentally healthy and calm. anyone can now stay healthy from the safety
				of their homes with just single click that helps you to
				#BeBetterEveryDay
			</p>
			<div className="about-home-flex">
				<div className="about-home__sub-block">
					<GiMuscleUp className="home-icon" />
					<div className="sub-block-text">
						<h4 className="mini-heading">Core Body exercises</h4>
						<p className="muted-paragraph">
							Core exercises train the muscles in your pelvis, lower back, hips
							and abdomen to work in harmony. This leads to better balance and
							stability, whether on the playing field or in daily activities.
						</p>
					</div>
				</div>
				<div className="about-home__sub-block">
					<GiRobe className="home-icon" />
					<div className="sub-block-text">
						<h4 className="mini-heading">Personal Trainers</h4>
						<p className="muted-paragraph">
							Weight-loss, maintaining weight and muscle, healthier heart and
							fighting cholesterol, getting leaner, developing core strength,
							gaining muscle, building impressive physique, increasing
						</p>
					</div>
				</div>
				<div className="about-home__sub-block">
					<GiKnifeFork className="home-icon" />
					<div className="sub-block-text">
						<h4 className="mini-heading">Nutrition planning</h4>
						<p className="muted-paragraph">
							The Nutrition and planning is the programme that provides about
							nutritious meal to all learners.The objective is to provide
							nutritious meals to learners so as to improve their ability to
							learn.
						</p>
					</div>
				</div>
				<div className="about-home__sub-block">
					<GiHeartBeats className="home-icon" />
					<div className="sub-block-text">
						<h4 className="mini-heading">Yoga & Spa</h4>
						<p className="muted-paragraph">
							In short, you will be immersing yourself into a deep state of
							relaxation with subtle poses of yoga and breathing exercises,
							taught by a restorative yoga teacher, and complemented with the
							delicately guided fingers of a Spa therapist.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutHome;
