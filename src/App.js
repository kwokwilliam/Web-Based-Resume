import './App.css';

function App() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const resumeOnlyMode = params.get('resumeonly');

	return (
		<div className="App">
			{!resumeOnlyMode && (
				<div id="other-body-stuff">
					Hi stuff goes here
				</div>
			)}
			<div id="pdf">
				<div id="header">
					<div id="header-left">
						<div>
							<i class="fa fa-envelope"></i> <a href="mailto:email@email.com">email@email.com</a>
						</div>
						<div>
							<i class="fa fa-phone"></i> <a href="tel:555-555-1234">(555) 555 - 1234</a>
						</div>
					</div>
					<div id="header-middle">
						<p>William Kwok</p>
					</div>
					<div id="header-right">
						<div>
							<a href="https://github.com/kwokwilliam">kwokwilliam</a> <i class="fa fa-github"></i>
						</div>
						<div>
							<a href="https://linkedin.com/in/william-w-kwok">william-w-kwok</a> <i class="fa fa-linkedin"></i>
						</div>
						<div>
							<a href="https://williamk.info/?q=resexample">williamk.info</a> <i class="fa fa-globe"></i>
						</div>
					</div>
				</div>
				<div class="section">
					<div class="section-header">
						<i class="fa fa-graduation-cap"></i> EDUCATION
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">University of Washington - Seattle, Washington</div>
							<div class="item-date">Sept 2016 - Jun 2020</div>
						</div>
						<ul>
							<li>GPA: 4/4</li>
							<li>Bachelor of Science in Underwater Basket Weaving</li>
							<li>Clubs: None</li>
						</ul>
					</div>
				</div>

				<div class="section">
					<div class="section-header">
						<i class="fa fa-briefcase"></i> EXPERIENCE
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">Job 1</div>
							<div class="item-date">Sept 2016 - Jun 2020</div>
						</div>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et.</li>
							<li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip.</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
							<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						id est.</li>
						</ul>
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">Job 2</div>
							<div class="item-date">Sept 2016 - Jun 2020</div>
						</div>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et.</li>
							<li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip.</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
							<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						id est.</li>
						</ul>
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">Job 3</div>
							<div class="item-date">Sept 2016 - Jun 2020</div>
						</div>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et.</li>
							<li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip.</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
							<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						id est.</li>
						</ul>
					</div>
				</div>

				<div class="section">
					<div class="section-header">
						<i class="fa fa-code"></i> PROJECTS
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">Project 1</div>
							<div class="item-date">Sept 2016 - Jun 2020</div>
						</div>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et.</li>
							<li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip.</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
							<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						id est.</li>
						</ul>
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">Project 2</div>
							<div class="item-date">Sept 2016 - Jun 2020</div>
						</div>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et.</li>
							<li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip.</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
							<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						id est.</li>
						</ul>
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title">Project 3</div>
							<div class="item-date">Sept 2016 - Jun 2020</div>
						</div>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et.</li>
							<li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip.</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
							<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						id est.</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
						</ul>
					</div>
				</div>

				<div class="section">
					<div class="section-header">
						<i class="fa fa-wrench"></i> SKILLS
					</div>
					<div class="item">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et.</li>
							<li>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip.</li>
							<li>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat.</li>
							<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
						id est.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
