(function (window){
	var
		  login = 'rubaxa'
		, _rname = /^(.*?)\s+([-—]+\s+)/
		, _repos = [
			{"name": "Pilot", "description": "Pilot — multifunction JavaScript router.", "stargazers_count": 27, "owner": {"login": "RubaXa"}, "homepage": "http://rubaxa.github.com/Pilot/"},
			{"name": "FileAPI", "description": "FileAPI — a set of  javascript tools for working with files. Multiupload, drag'n'drop and chunked file upload. Images: crop, resize and auto orientation by EXIF.", "stargazers_count": 1376, "owner": {"login": "mailru"}, "homepage": "http://mailru.github.io/FileAPI/"},
			{"name": "Sortable", "description": "Sortable — is a minimalist JavaScript library for modern browsers and touch devices. No jQuery.", "stargazers_count": 254, "owner": {"login": "RubaXa"}, "homepage": "http://rubaxa.github.com/Sortable/"},
			{"name": "callStack", "description": "Call stack controller", "stargazers_count": 1, "owner": {"login": "RubaXa"}, "homepage": "https://github.com/RubaXa/callStack"},
			{"name": "Error.stack", "description": "Error.stack — Interface for analyzing the stack.", "stargazers_count": 1, "owner": {"login": "RubaXa"}, "homepage": "http://rubaxa.github.io/Error.stack/"},
			{"name": "jquery.fileapi", "description": "jQuery.FileAPI — jquery plugin for FileAPI (multiupload, image upload, crop, resize and etc.)", "stargazers_count": 155, "owner": {"login": "RubaXa"}, "homepage": "http://rubaxa.github.io/jquery.fileapi/"}
		]
	;


	// exports
	(window.rubaxa || (window.rubaxa = {})).repos = {
		load: function (users, callback){
			if( _repos ){
				callback(_repos);
			}
			else {
				var
					  i = 0
					, loaded = 0
					, total = users.length
					, repos = []
					, complete = function (){
						if( ++loaded == total ){
							callback(repos);
						}
					}
				;

				for( ; i < total; i++ ){
					var
						  uid = '_'+Math.round(Math.random() * 1e7)
						, script = document.createElement('script')
					;

					this[uid] = function (result){
						repos = repos.concat(result.data);
						complete();
					};

					script.type = 'text/javascript';
					script.src = 'https://api.github.com/users/'+users[i]+'/repos?callback=rubaxa.repos.' + uid;

					(document.head || document.getElementsByTagName('head')[0]).appendChild(script);
					script = null;
				}
			}
		},


		publish: function (el){
			this.load([login, 'mailru'], function (repos){
				var i = 0, n = repos.length, html = '', _repos = [];

				repos.sort(function (a, b){
					return	(a.name && a.name.length || 0) - (b.name && b.name.length || 0);
				});

				for( ; i < n; i++ ){
					var
						  repo = repos[i]
						, descr = repo.description
						, match = (descr || '').match(_rname) || []
						, url = (repo.homepage || repo.html_url)
					;

					if(
						   !repo.fork
						&& (repo.owner.login.toLowerCase() === login || repo.name == 'FileAPI')
						&& (repo.stargazers_count > 10 || /stack/i.test(url))
						&& (url.indexOf(location.pathname) == -1)
					){
						html += '<li style="padding-bottom: 5px; padding-left: 20px;">'+
							'<a href="'+url+'">'+(match[1] || repo.name)+'</a>'+
							'<span> &mdash; '+ descr.replace(_rname, '') +'</span>'+
							'</li>'
						;

						_repos.push({
							  name: repo.name
							, description: descr
							, stargazers_count: repo.stargazers_count
							, owner: { login: repo.owner.login }
							, homepage: url
						});
					}
				}

				el.innerHTML = '<ul style="line-height: 145%; font-size: 18px; list-style: none; padding: '+(el.getAttribute('data-padding') || 20)+'px;">'+
					'<li style="padding-bottom: 10px">' +
					(el.getAttribute('data-title')
						? ('<h3>'+el.getAttribute('data-title')+'</h3>')
						: (
							'<a href="https://twitter.com/ibnRubaXa">@ibnRubaXa</a> / '+
							'<a href="https://github.com/RubaXa/">github</a>:'
						)) +
					'</li>'+
					html+
					'</ul>'
				;
//				console.log(JSON.stringify(_repos));
			});
		}
	};


	rubaxa.repos.publish(document.getElementById('rubaxa-repos'));
})(window);
