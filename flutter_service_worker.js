'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a2e03a59cde78d3956bf5c5ad6e654d6",
"index.html": "eb58d4b1a8071b01eaa94e4381c292b2",
"/": "097b1a0d707b430a63ceaf50a3c6c1a4",
"test/widget_test.dart": "2c1e5826228c0f363c887e8a9260ad94",
"main.dart.js": "0652ed7d2d736d2933acb15d50b2a836",
"web/index.html": "6066d188857a97b05d645a1e26d1165c",
"web/test/widget_test.dart": "2c1e5826228c0f363c887e8a9260ad94",
"web/web/index.html": "ca975193a92a223f4eed1ec2eff98db8",
"web/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/web/manifest.json": "901d86fb8842ec0d66225a542131d689",
"web/pubspec.lock": "e404c0b531e9c51b0431ad12214c6d29",
"web/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"web/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"web/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"web/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"web/ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"web/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"web/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"web/ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"web/ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"web/ios/Runner/Info.plist": "83ba072aa84afe50d37e2147f4f6e607",
"web/ios/Runner.xcodeproj/project.pbxproj": "63d3d9a763a6b87dacb5975f706f0b46",
"web/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"web/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "4c619b382ab54d778dbc522ef4b1c6e5",
"web/ios/Flutter/flutter_export_environment.sh": "7da827fd21cb9b59044551f328be3453",
"web/ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"web/ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"web/ios/Flutter/AppFrameworkInfo.plist": "1beb17747ea5d0af65d1b821f5aae959",
"web/ios/Flutter/Generated.xcconfig": "aa76c866bf1cfa14e7ae2516a4f027c0",
"web/README.md": "819ac07eefd10498065880dd0d4e318e",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/pubspec.yaml": "b98353db8750c816043e53040e84de81",
"web/android/app/build.gradle": "bfb8e3be162d220c6f11a290ace72775",
"web/android/app/src/profile/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"web/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"web/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"web/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"web/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"web/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"web/android/app/src/main/res/values-night/styles.xml": "9a0d0c025baa6413fb7925a1fc0e7d91",
"web/android/app/src/main/res/values/styles.xml": "0bb9efe0fe32b3c7256a360ca418377d",
"web/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"web/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"web/android/app/src/main/AndroidManifest.xml": "b2d87e203907c61e1f730cf22cf822b8",
"web/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"web/android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"web/android/app/src/debug/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"web/android/local.properties": "0edc4b015a359578c590c92ba552be87",
"web/android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"web/android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"web/android/gradle/wrapper/gradle-wrapper.properties": "4a3ac42d3bba3464a5c2ed6ccb15ccf9",
"web/android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"web/android/build.gradle": "519fb42e618d727ec96c11852d61b3b3",
"web/android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"web/android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"web/android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/manifest.json": "901d86fb8842ec0d66225a542131d689",
"web/lib/main.dart": "484ba84ed8263b95eae029e536e19467",
"web/analysis_options.yaml": "90ca05185a2de012cebf6fb9f85f3598",
"web/.dart_tool/package_config.json": "26295012f5e286491488f65ae1f70ecf",
"web/.dart_tool/package_config_subset": "47ee5c0536dd4ae605e0420a6e4d8960",
"web/.dart_tool/version": "8b05d7836fe6acbc3b32e2b01ba17bc3",
"web/windows/CMakeLists.txt": "e48a5f4aca3f3cea914258d3a5040556",
"web/windows/runner/flutter_window.cpp": "33cfe7edb15df580c3b9f20c12337c60",
"web/windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"web/windows/runner/utils.cpp": "871560f4eecc7e1ac44398a0ee748702",
"web/windows/runner/runner.exe.manifest": "5dc436d08667c913403a9d06f328a7fd",
"web/windows/runner/CMakeLists.txt": "79c89020cac1e75c9b507ef33837649c",
"web/windows/runner/win32_window.h": "fb1ab730377ad5aa5c1dee1cfdc5a093",
"web/windows/runner/win32_window.cpp": "5912f5ea9be16f88da68751ea557e86a",
"web/windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"web/windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"web/windows/runner/Runner.rc": "751325789d5ac3344fe1b6cf77672508",
"web/windows/runner/main.cpp": "e74540ede226558c988fd866d1cc9acd",
"web/windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"web/windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"web/windows/flutter/CMakeLists.txt": "e8de8654812ba41da0e682596f3ee861",
"web/windows/flutter/generated_plugins.cmake": "9d9aa3846cae8ac080da713b4f8ed197",
"web/windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"web/web.iml": "0e10d326c956d57be354882dfdf4d740",
"web/.idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
"web/.idea/libraries/Dart_SDK.xml": "4fb8f6911ee3cc2e33280c6dbbd83119",
"web/.idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
"web/.idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
"web/.idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769",
"pubspec.lock": "e404c0b531e9c51b0431ad12214c6d29",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "83ba072aa84afe50d37e2147f4f6e607",
"ios/Runner.xcodeproj/project.pbxproj": "63d3d9a763a6b87dacb5975f706f0b46",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "4c619b382ab54d778dbc522ef4b1c6e5",
"ios/Flutter/flutter_export_environment.sh": "2164f33201ce9d53bb5434afb28c2589",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/AppFrameworkInfo.plist": "1beb17747ea5d0af65d1b821f5aae959",
"ios/Flutter/Generated.xcconfig": "c5e9481d023be09e1440fd44ee9586d4",
"README.md": "819ac07eefd10498065880dd0d4e318e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pubspec.yaml": "b98353db8750c816043e53040e84de81",
"android/app/build.gradle": "bfb8e3be162d220c6f11a290ace72775",
"android/app/src/profile/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/values-night/styles.xml": "9a0d0c025baa6413fb7925a1fc0e7d91",
"android/app/src/main/res/values/styles.xml": "0bb9efe0fe32b3c7256a360ca418377d",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/AndroidManifest.xml": "b2d87e203907c61e1f730cf22cf822b8",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"android/app/src/debug/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"android/local.properties": "0edc4b015a359578c590c92ba552be87",
"android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "4a3ac42d3bba3464a5c2ed6ccb15ccf9",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/build.gradle": "519fb42e618d727ec96c11852d61b3b3",
"android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4c3d851351742a6bc050b6452a05c04c",
"lib/main.dart": "484ba84ed8263b95eae029e536e19467",
"analysis_options.yaml": "90ca05185a2de012cebf6fb9f85f3598",
"build/web/version.json": "b3b87f9153d4406c14bc11865bbe1089",
"build/web/index.html": "bbb9eb865df15a35ffb622308bd4dd56",
"build/web/test/widget_test.dart": "2c1e5826228c0f363c887e8a9260ad94",
"build/web/main.dart.js": "3a93a977138d19fb1c9034f4e411c64d",
"build/web/web/index.html": "097b1a0d707b430a63ceaf50a3c6c1a4",
"build/web/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/web/manifest.json": "901d86fb8842ec0d66225a542131d689",
"build/web/pubspec.lock": "e404c0b531e9c51b0431ad12214c6d29",
"build/web/ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"build/web/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"build/web/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"build/web/ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"build/web/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"build/web/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"build/web/ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"build/web/ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"build/web/ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"build/web/ios/Runner/AppDelegate.swift": "640effd31ad5be56ac222976d95a5878",
"build/web/ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"build/web/ios/Runner/Info.plist": "83ba072aa84afe50d37e2147f4f6e607",
"build/web/ios/Runner.xcodeproj/project.pbxproj": "63d3d9a763a6b87dacb5975f706f0b46",
"build/web/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"build/web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"build/web/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"build/web/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "4c619b382ab54d778dbc522ef4b1c6e5",
"build/web/ios/Flutter/flutter_export_environment.sh": "7da827fd21cb9b59044551f328be3453",
"build/web/ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"build/web/ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"build/web/ios/Flutter/AppFrameworkInfo.plist": "1beb17747ea5d0af65d1b821f5aae959",
"build/web/ios/Flutter/Generated.xcconfig": "aa76c866bf1cfa14e7ae2516a4f027c0",
"build/web/README.md": "819ac07eefd10498065880dd0d4e318e",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/pubspec.yaml": "b98353db8750c816043e53040e84de81",
"build/web/android/app/build.gradle": "bfb8e3be162d220c6f11a290ace72775",
"build/web/android/app/src/profile/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"build/web/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"build/web/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"build/web/android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"build/web/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"build/web/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"build/web/android/app/src/main/res/values-night/styles.xml": "9a0d0c025baa6413fb7925a1fc0e7d91",
"build/web/android/app/src/main/res/values/styles.xml": "0bb9efe0fe32b3c7256a360ca418377d",
"build/web/android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"build/web/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"build/web/android/app/src/main/AndroidManifest.xml": "b2d87e203907c61e1f730cf22cf822b8",
"build/web/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"build/web/android/app/src/main/kotlin/com/example/web/MainActivity.kt": "43434a410f350a43526ada5ffea4d5ae",
"build/web/android/app/src/debug/AndroidManifest.xml": "3550dc2715aa6b5f0f0bb04b30a11063",
"build/web/android/local.properties": "0edc4b015a359578c590c92ba552be87",
"build/web/android/web_android.iml": "e631be658ada5ed327bf47f851a6ed5b",
"build/web/android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"build/web/android/gradle/wrapper/gradle-wrapper.properties": "4a3ac42d3bba3464a5c2ed6ccb15ccf9",
"build/web/android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"build/web/android/build.gradle": "519fb42e618d727ec96c11852d61b3b3",
"build/web/android/gradle.properties": "4a756df24e4431aa00ea27ee9b863c97",
"build/web/android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"build/web/android/settings.gradle": "10881f279cc48040996c7354515e0da7",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/manifest.json": "901d86fb8842ec0d66225a542131d689",
"build/web/lib/main.dart": "484ba84ed8263b95eae029e536e19467",
"build/web/analysis_options.yaml": "90ca05185a2de012cebf6fb9f85f3598",
"build/web/.dart_tool/package_config.json": "26295012f5e286491488f65ae1f70ecf",
"build/web/.dart_tool/package_config_subset": "47ee5c0536dd4ae605e0420a6e4d8960",
"build/web/.dart_tool/version": "8b05d7836fe6acbc3b32e2b01ba17bc3",
"build/web/windows/CMakeLists.txt": "e48a5f4aca3f3cea914258d3a5040556",
"build/web/windows/runner/flutter_window.cpp": "33cfe7edb15df580c3b9f20c12337c60",
"build/web/windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"build/web/windows/runner/utils.cpp": "871560f4eecc7e1ac44398a0ee748702",
"build/web/windows/runner/runner.exe.manifest": "5dc436d08667c913403a9d06f328a7fd",
"build/web/windows/runner/CMakeLists.txt": "79c89020cac1e75c9b507ef33837649c",
"build/web/windows/runner/win32_window.h": "fb1ab730377ad5aa5c1dee1cfdc5a093",
"build/web/windows/runner/win32_window.cpp": "5912f5ea9be16f88da68751ea557e86a",
"build/web/windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"build/web/windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"build/web/windows/runner/Runner.rc": "751325789d5ac3344fe1b6cf77672508",
"build/web/windows/runner/main.cpp": "e74540ede226558c988fd866d1cc9acd",
"build/web/windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"build/web/windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"build/web/windows/flutter/CMakeLists.txt": "e8de8654812ba41da0e682596f3ee861",
"build/web/windows/flutter/generated_plugins.cmake": "9d9aa3846cae8ac080da713b4f8ed197",
"build/web/windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"build/web/web.iml": "0e10d326c956d57be354882dfdf4d740",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/NOTICES": "5e7feb15b4ea57eab8ff9bc6da0322de",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"build/web/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"build/web/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"build/web/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"build/web/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"build/web/.idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
"build/web/.idea/libraries/Dart_SDK.xml": "4fb8f6911ee3cc2e33280c6dbbd83119",
"build/web/.idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
"build/web/.idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
"build/web/.idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769",
".dart_tool/package_config.json": "07108a9ce01933a6e43433e0093ff68a",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/web_service_worker.stamp": "e0eca376f5bd917f753bedc73df21120",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/dart2js.d": "84acc1e74bb9365ee0ab02cf4502d33b",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/web_static_assets.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/main.dart.js.deps": "832cd3818ac0d4cd21c2ad9fcada5e42",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/main.dart.js": "3a93a977138d19fb1c9034f4e411c64d",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/app.dill": "6244d80eadb8b58ce35999b72233fece",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/outputs.json": "1a47f0b5e26450da7479c721c55e819d",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/web_release_bundle.stamp": "8e0b0dc4907c9e5ad8f080906494d1f9",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/flutter_assets.d": "22884aff7e72e5a5cd9e8eb0a7236d5b",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/main.dart": "3eb149e80cb657ffa4e48b34883af470",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/dart2js.stamp": "551057800e25d83b52d0bb1c71f8d9c7",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/service_worker.d": "93d8a039c06a0580cf24261938a34c1a",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/web_resources.d": "f7692a0db59f031fd9cd9cecd03ee991",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/app.dill.deps": "7510067323fdb8c99958a5dc5454b395",
".dart_tool/flutter_build/81bc472fb73017cb640af362b936cd01/web_entrypoint.stamp": "d65ca6b0b91619e25ec7ced0e5f28064",
".dart_tool/package_config_subset": "f9e2273c2821373836bd50037430d3d2",
".dart_tool/version": "8b05d7836fe6acbc3b32e2b01ba17bc3",
"windows/CMakeLists.txt": "e48a5f4aca3f3cea914258d3a5040556",
"windows/runner/flutter_window.cpp": "33cfe7edb15df580c3b9f20c12337c60",
"windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"windows/runner/utils.cpp": "871560f4eecc7e1ac44398a0ee748702",
"windows/runner/runner.exe.manifest": "5dc436d08667c913403a9d06f328a7fd",
"windows/runner/CMakeLists.txt": "79c89020cac1e75c9b507ef33837649c",
"windows/runner/win32_window.h": "fb1ab730377ad5aa5c1dee1cfdc5a093",
"windows/runner/win32_window.cpp": "5912f5ea9be16f88da68751ea557e86a",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"windows/runner/Runner.rc": "751325789d5ac3344fe1b6cf77672508",
"windows/runner/main.cpp": "e74540ede226558c988fd866d1cc9acd",
"windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/CMakeLists.txt": "e8de8654812ba41da0e682596f3ee861",
"windows/flutter/generated_plugins.cmake": "9d9aa3846cae8ac080da713b4f8ed197",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"web.iml": "0e10d326c956d57be354882dfdf4d740",
"assets/AssetManifest.json": "7dda624c763f2575d892a0eff460a90a",
"assets/NOTICES": "bb6a3681563dc2fd4ba304a3664a0091",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/Field.png": "52a53d22c5adbaf98c22500ca07919ac",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/libraries/Dart_SDK.xml": "4fb8f6911ee3cc2e33280c6dbbd83119",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
