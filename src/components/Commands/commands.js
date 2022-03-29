/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat";
import getnp from "../../utils/spotify";
export default {
	commands: {
		echo: {
			description: "Prints the given text to the console",
			usage: "echo <text>",
			fn: (...args) => args.join(" "),
		},
		// cat: {
		//     description: 'Get a cute cat image.',
		//     usage: 'cat',
		//     fn: async () => {
		//         const url = await getcat()
		//         window.open(url, '_blank')
		//         return "fetching cat...\ncat fetched successfully!"
		//     }
		// },
		about: {
			description: "About Me.",
			usage: "about",
			fn: () => {
				return "About Me.\n---\nmale\n28\nultimate chad\ngamer\nmelophile\nnerd\nanti-antisocial\nmoney lover\n---\n";
			},
		},
		github: {
			description: "Opens my GitHub Profile.",
			usage: "twitter",
			fn: () => {
				window.open("https://github.com/rlivermorejr", "_blank");
				return "opening github account...";
			},
		},
		discord: {
			description: "Opens my Discord Account.",
			usage: "twitter",
			fn: () => {
				window.open("https://discordapp.com/users/742743814959005779", "_blank");
				return "opening discord account...";
			},
		},
		languages: {
			description: "Languages I know.",
			usage: "languages",
			fn: () => {
				return `
                    these are the languages I know.\n---\n
                    english          - 90%
                    gen-z-langauge   - 00%
                    python           - 70%
                    javascript       - 80%
                    html5            - 90%
                    css              - 90%\n---\n
										RTE's:
										node             - 80%\n---\n
										FRAMEWORKS:
										react            - 60%
										django           - 80%
                    ruby             - 10% - [learning]
                    angular          - 10% - [learning]\n---\n
										DATABASE ENGINES/MANAGERS:
										MonogDB           - 60%
										MySQL             - 40%
										Sqlite3           - 40%\n---\n
                `;
			},
		},
		skills: {
			description: "Skills I have.",
			usage: "skills",
			fn: () => {
				return `
                    these are the skills I have.\n---\n
                    procrastination  - 0%
                    coding           - 60%
                    studying         - 30%
                    overthinking     - 120%
                    social-skills    - 10%
                    making-playlists - 100%\n---\n
                `;
			},
		},
		projects: {
			description: "Projects I have worked on.",
			usage: "projects",
			fn: () => {
				return `
                    Cool projects I have worked on.\n---\n
                    'ThePitBoard'                     | 'Fantasy-formula-1'   | 'python/django'
                    'screaming'                       | 'social-media-forum'  | 'python/django'
                    'weeby.py'                        | 'API-wrapper'         | 'python'
                    'github-readme-banner-generator'  | 'banner-generator'    | 'javascript'\n---\n
                `;
			},
		},
		editor: {
			description: "Details about my current editor",
			usage: "editor",
			fn: () => {
				return `
                    Editor: Visual Studio Code\n
                    Theme : Andromeda Bordered\n
                    Font  : Consolas
                `;
			},
		},
		repo: {
			description: "Opens this website's github repository.",
			usage: "repo",
			fn: () => {
				window.open("https://github.com/rlivermorejr/terminal_webpage", "_blank");
				return "opening repository...";
			},
		},
		spotify: {
			description: "Get info about my recently played song.",
			usage: "spotify",
			fn: async () => {
				const item = await getnp();
				return `
                    Now Playing/Recently Played\n
                    ---\n
                    Song: ${item.song}\n
                    Artist: ${item.artist}\n---\n
                `;
			},
		},
	},
	overwrites: {
		help: {
			description: "List all available commands",
			usage: "help",
		},
		cd: {
			description: "Change directory, not really, lol!",
			usage: "cd <directory>",
		},
		ls: {
			description: "List files in the current directory",
			usage: "ls",
		},
		mkdir: {
			description: "Make a directory",
			usage: "mkdir <directory>",
		},
		clear: {
			description: "Clears the terminal",
			usage: "clear",
		},
		cat: {
			description: "Get a cute cat image.",
			usage: "cat",
		},
	},
};
