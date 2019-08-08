import React, { Component } from "react";

export default class StoryList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			article: "",
			author: "",
			notices: [
				{
					title: "story1",
					article: "this is test notice MF",
					author: "MF"
				},
				{
					title: "story2",
					article: "who the hell?",
					author: "god"
				},
				{
					title: "story3",
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
					<span class="title_head">Story</span>
				</div>
				<div class="section_content">
				<ul class="main_list">
					{this.state.notices.map(listItem => {
						return (
							<li
								class="section_item"
								key={
									listItem.title
								}
							>
								{listItem.title}
							</li>
						);
					})}
						</ul>
					</div>
			</div>
		);
	}
}
