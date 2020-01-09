(function (window, document) {
	var _rname = /^(.*?)\s+([-—]+\s+)/;
	var _repos = [
			{
				"name": "@artifact-project/webauthn",
				"desc": "🔐A set of tools for building an API and interacts with WebAuthn",
				"url": "https://github.com/artifact-project/webauthn"
			},
			{
				"name": "@perf-tools/keeper",
				"desc": "🚀It's a tool for performance monitoring and profiling your application (also best replacement for console.time).",
				"url": "https://github.com/artifact-project/perf-tools/tree/master/keeper#readme"
			},
			{
				"name": "@artifact-project/morph",
				"desc": "🦠It's a micro library for DOM patching",
				"url": "https://github.com/artifact-project/morph"
			},
			{
				"name": "@artifact-project/recaptcha",
				"desc": "🤖reCAPTCHA API wrapper + Base Components (vue, react, web-component)",
				"url": "https://github.com/artifact-project/recaptcha"
			},
			{
				"name": "tx-i18n",
				"desc": "🈂️Auto-translate for your application (React supported)",
				"url": "https://github.com/artifact-project/tx-i18n#readme"
			},
			{
				"name": "~/.bashkit/",
				"desc": "*⃣It is the toolset for the developing bash scripts.",
				"url": "https://github.com/RubaXa/react-spy/#readme"
			},
			{
				"name": "react-spy",
				"desc": "A set of utilities for collecting UX-analytics of your React-application (ex: clicks, shows, errors and etc.)",
				"url": "https://github.com/RubaXa/bashkit/#readme"
			},
			{
				"name": "react-devtools-symbiote",
				"desc": "A module that allows use React DevTools for inspection your component hierarchy without React.",
				"url": "https://github.com/artifact-project/react-devtools-symbiote/#readme"
			},
			{
				"name": "npmy",
				"desc": "`npm link` on steroids",
				"url": "https://github.com/artifact-project/npmy/#readme"
			},
			{
				"name": "tx-reflector",
				"desc": "TypeScript transformer for code generation.",
				"url": "https://github.com/artifact-project/tx-reflector/#readme"
			},
			{
				"name": "JSBench",
				"desc": "JSBench — JavaScript benchmark playground. User-friendly interface, sync with your github, code highlighting and etc.",
				"url": "http://jsbench.github.io/"
			},
			{
				"name": "Ply",
				"desc": "Ply — Amazing layer/modal/dialog system. Wow!",
				"url": "http://rubaxa.github.io/Ply/"
			},
			{
				"name": "Pilot",
				"desc": "Pilot — multifunction JavaScript router.",
				"url": "http://rubaxa.github.io/Pilot/"
			},
			{
				"name": "FileAPI",
				"desc": "FileAPI — a set of  javascript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.",
				"url": "http://mailru.github.io/FileAPI/"
			},
			{
				"name": "Sortable",
				"desc": "Sortable — is a minimalist JavaScript library for modern browsers and touch devices. No jQuery.",
				"url": "http://rubaxa.github.io/Sortable/"
			},
			{
				"name": "wormhole",
				"desc": "Wormhole — Is EventEmitter for communication between tabs.",
				"url": "http://rubaxa.github.io/wormhole/"
			},
			{
				"name": "callStack",
				"desc": "Call stack controller",
				"url": "https://github.com/RubaXa/callStack"
			},
			{
				"name": "Error.stack",
				"desc": "Error.stack — Interface for analyzing the stack.",
				"url": "http://rubaxa.github.io/Error.stack/"
			},
			{
				"name": "jquery.fileapi",
				"desc": "jQuery.FileAPI — jquery plugin for FileAPI (multiupload, image upload, crop, resize and etc.)",
				"url": "http://rubaxa.github.io/jquery.fileapi/"
			}
		]
	;


	// Export
	(window.rubaxa || (window.rubaxa = {})).repos = {
		publish: function (el){
			if (el) {
				var html = [],
					i = 0,
					n = _repos.length
				;

				for (; i < n; i++) {
					var repo = _repos[i],
						desc = repo.desc,
						match = (desc || '').match(_rname) || [],
						url = repo.url
					;

					html += '<li style="padding-bottom: 5px; padding-left: 20px;">' +
						'<a href="'+ url + '">' + (match[1] || repo.name) + '</a>' +
						'<span> &mdash; ' + desc.replace(_rname, '') + '</span>' +
						'</li>'
					;
				}

				el.innerHTML = '<ul style="line-height: 145%; font-size: 18px; list-style: none; padding: ' + (el.getAttribute('data-padding') || 20) + 'px;">' +
					'<li style="padding-bottom: 10px">' +
					(el.getAttribute('data-title')
						? ('<h3>' + el.getAttribute('data-title') + '</h3>')
						: (
							'<a href="https://twitter.com/ibnRubaXa">@ibnRubaXa</a> / ' +
							'<a href="https://github.com/RubaXa/">github</a>:'
						)) +
					'</li>' + html + '</ul>' +
					this.publishSocial(el.getAttribute('data-social'))
				;
			}
		},

		donateButton: function () {
			return '<a href="https://www.paypal.me/RubaXa/15"><img src="http://rubaxa.github.io/st/donate.jpg" alt="Donate"/></a>';
		},

		publishSocial: function (id) {
			var url = location.toString();

			setTimeout(function () {
				// G+
				window.___gcfg = { lang: 'en' };
				(function() {
					var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
					po.src = 'https://apis.google.com/js/platform.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
				})();

				// FB
				(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&appId=195510670486521&version=v2.0";
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
			}, 1);

			var el = document.getElementById(id);

			var html = (
				'<div id="fb-root"></div>' +
				'<div style="padding: 40px 0; text-align: center">' +
				'  ' + this.donateButton() +
				'  <div style="top: -5px" class="fb-like" data-href="' + url +  '" data-layout="button" data-show-faces="true" data-action="' + (el && el.getAttribute('data-fb-action') || 'recommend') + '" ></div>' +
				'  <div class="g-plusone" data-size="medium" data-href="' + url + '"></div>' +
				'</div>'
			);

			if (el) {
				el.innerHTML = html;
				return '';
			}

			return html;
		}
	};

	// Publish
	rubaxa.repos.publish(document.getElementById('rubaxa-repos'));
})(window, document);
