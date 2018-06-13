
module.exports = {
	plugins : {
		'postcss-cssnext' : {
			browsers : ['last 2 versions'],
			features : {
				customMedia : {
					extensions : {
						'--media-sm' : '(min-width: 576px)',
						'--media-md' : '(min-width: 768px)',
						'--media-lg' : '(min-width: 992px)',
						'--media-xl' : '(min-width: 1200px)',
						'--media-max-xs' : '(max-width: 575px)',
						'--media-max-sm' : '(max-width: 767px)',
						'--media-max-md' : '(max-width: 991px)',
						'--media-max-lg' : '(max-width: 1199px)'
					}
				}
			}
		},
		'postcss-discard-duplicates' : {}
		
	}
}
