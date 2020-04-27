/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

// const versions = require('./versions.json');

module.exports = {
	title: 'ACheckin',
	tagline: 'Tạo ứng dụng của bạn',
	url: 'https://acheckin.vn',
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	organizationName: 'acheckin', // Usually your GitHub org/user name.
	projectName: 'acheckin-sdk', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'ACheckin',
			logo: {
				alt: 'ACheckin Logo',
				src: 'img/logo.png',
			},
			links: [
				{
					to: 'docs/introduction',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				// { to: 'blog', label: 'Blog', position: 'left' },
				// Please keep GitHub link to the right for consistency.
				{
					to: 'versions',
					label: `v1.0.12`,
					position: 'right',
				},
				{
					href: 'https://github.com/ACheckin/acheckin-sdk',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			// links: [
			// 	{
			// 		title: 'Docs',
			// 		items: [
			// 			{
			// 				label: 'Style Guide',
			// 				to: 'docs/doc1',
			// 			},
			// 			{
			// 				label: 'Second Doc',
			// 				to: 'docs/doc2',
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: 'Community',
			// 		items: [
			// 			{
			// 				label: 'Stack Overflow',
			// 				href: 'https://stackoverflow.com/questions/tagged/docusaurus',
			// 			},
			// 			{
			// 				label: 'Discord',
			// 				href: 'https://discordapp.com/invite/docusaurus',
			// 			},
			// 		],
			// 	},
			// 	{
			// 		title: 'Social',
			// 		items: [
			// 			{
			// 				label: 'Blog',
			// 				to: 'blog',
			// 			},
			// 			{
			// 				label: 'GitHub',
			// 				href: 'https://github.com/facebook/docusaurus',
			// 			},
			// 			{
			// 				label: 'Twitter',
			// 				href: 'https://twitter.com/docusaurus',
			// 			},
			// 		],
			// 	},
			// ],
			// logo: {
			//   alt: 'Facebook Open Source Logo',
			//   src: 'img/oss_logo.png',
			//   href: 'https://opensource.facebook.com/',
			// },
			// Please do not remove the credits, help to publicize Docusaurus :)
			copyright: `Copyright © ${new Date().getFullYear()} ACheckin, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/ACheckin/acheckin-document-website/edit/master/website/',
					remarkPlugins: [require('./src/plugins/remark-npm2yarn')]
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
