/**
 * Ti.RunScriptPhase
 * @abstract Support run-script-phases (aka shell-scripts) in native Titanium modules.
 * @version 0.0.1
 */
exports.id = 'ti.runscriptphase';

exports.cliVersion = '>=3.2';

exports.init = function(logger, config, cli, appc) {
  cli.on('build.ios.xcodeproject', {
    pre: function(data) {

			var builder = this;
			var xcodeProject = data.args[0];
			var xobjs = xcodeProject.hash.project.objects;

      // Reference the directory that contains your scripts
      var scriptsDirectory = '../../scripts/';

      // Add your scripts here
      var scripts = ['titanium-firebase-script.sh'];

      scripts.forEach(function(script) {
        var script_uuid = builder.generateXcodeUuid();
        var shell_path = '/bin/sh';
        var shell_script = 'bash \"' + scriptsDirectory + script + '\"';

        xobjs.PBXShellScriptBuildPhase = xobjs.PBXShellScriptBuildPhase || {};
        xobjs.PBXShellScriptBuildPhase[script_uuid] = {
          isa: 'PBXShellScriptBuildPhase',
          buildActionMask: '2147483647',
          files: '(\n)',
          inputPaths: '(\n)',
          outputPaths: '(\n)',
          runOnlyForDeploymentPostprocessing: 0,
          shellPath: shell_path,
          shellScript: JSON.stringify(shell_script)
        };

        for (var key in xobjs.PBXNativeTarget) {
          xobjs.PBXNativeTarget[key].buildPhases.push({
            value: script_uuid + '',
            comment: 'Run Script Phase'
          });
          return;
        }
      });
    }
  });
};
