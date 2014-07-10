(function (window){
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
					'</li>' + html + '</ul>'
				;
			}
		}
	};


	rubaxa.repos.publish(document.getElementById('rubaxa-repos'));
})(window);
