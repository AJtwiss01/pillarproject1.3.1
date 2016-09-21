module.exports=function(e){"use strict";e.util.linefeed="\n",e.initConfig({pkg:e.file.readJSON("package.json"),bower_conf:e.file.exists(".bowerrc")?e.file.readJSON(".bowerrc"):{directory:"bower_components"},banner:'/*!\n * Peachjar<%= pkg.version %> (<%= pkg.homepage %>)\n * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n */\n',clean:{pjHtml:["dist/pj-*.html","dist/home**.html"]},copy:{dist:{expand:!0,src:["fonts/**","img/**","css/**","js/**","bower_components/**","pj-*.html"],dest:"dist/"},distrenameHTML:{files:[{expand:!0,dot:!0,cwd:"dist",dest:"dist/",src:["{,*/}*.html"],rename:function(e,s){return e+s.replace("pj-","")}}]},distrenameHome:{files:[{expand:!0,dot:!0,cwd:"dist",dest:"dist/",src:["{,*/}*.html"],rename:function(e,s){return e+s.replace("home","index")}}]}},usebanner:{dist:{options:{position:"top",banner:"<%= banner %>"},files:{src:["dist/css/<%= pkg.name %>.css","dist/css/<%= pkg.name %>.min.css","docs/assets/css/docs.css"]}}}}),require("load-grunt-tasks")(e,{scope:"devDependencies"}),require("time-grunt")(e),e.registerTask("build",["copy","clean"])};