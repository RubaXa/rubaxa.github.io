(function (window, document) {
	var _rname = /^(.*?)\s+([-—]+\s+)/,
		_repos = [
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
			return (
				'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="overflow: hidden; width: 89px; height: 26px; vertical-align: middle; display: inline-block; position: relative; top: -4px;">\
					<input type="hidden" name="cmd" value="_s-xclick">\
					<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">\
					<input type="image" src="http://rubaxa.github.io/st/donate.jpg" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">\
					<img alt="" border="0" src="https://www.paypalobjects.com/ru_RU/i/scr/pixel.gif" width="1" height="1">\
				</form>'
			);
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
