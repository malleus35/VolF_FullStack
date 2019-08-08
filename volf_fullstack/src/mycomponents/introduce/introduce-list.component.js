import React, { Component } from "react";

export default class IntroduceList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			article: "",
			author: "",
			notices: [
				{
					title: "Introduce1",
					article: "this is test notice MF",
					author: "MF"
				},
				{
					title: "Introduce2",
					article: "who the hell?",
					author: "god"
				},
				{
					title: "Introduce3",
					article: "this is hard but fun",
					author: "YJD"
				}
			]
		};
	}

	render() {
		return (
			<div class="main_section">
				<div class="main_title">
					<span class="title_head">
						Introduce
					</span>
				</div>
				<div class="section_content">
					<ul class="main_list">
						{this.state.notices.map(
							listItem => {
								return (
									<li
										class="section_item"
										key={
											listItem.title
										}
									>
										{
											listItem.title
										}
									</li>
								);
							}
						)}
					</ul>
				</div>
			</div>
		);
	}
}
