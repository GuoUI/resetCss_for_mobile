var gulp=require("gulp"),
	minifyCss = require('gulp-minify-css'),			//压缩css
	rename = require('gulp-rename'),				//更改名字
	clean=require("gulp-clean");					//clean目录


/*======================= 华丽的分割线(生成dist上线版本) ============================*/

//clean目录
gulp.task("clean",function(){
	return gulp.src("dist/*/*")
	.pipe(clean())
})

//css处理
gulp.task("min-css", ['clean'], function(){
	return gulp.src("src/**/*.css")
	.pipe(minifyCss())
	.pipe(rename(function(path){
		path.basename += '_min'
	}))
	.pipe(gulp.dest('dist/'));
})

gulp.task('default', ['clean', 'min-css']);