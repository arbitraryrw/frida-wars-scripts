# frida-wars
+ 27th - 29th June
+ [FRIDA wars website](https://fridawars.sec-r.et/)
+ [Rules](https://fridawars.sec-r.et/rules)

## Usage
```
frida -U -l ./beansOnToast.js -f com.secret.fridawars --runtime=v8 --no-pause
```

Result:
```
     ____
    / _  |   Frida 12.10.4 - A world-class dynamic instrumentation toolkit
   | (_| |
    > _  |   Commands:
   /_/ |_|       help      -> Displays the help system
   . . . .       object?   -> Display information about 'object'
   . . . .       exit/quit -> Exit
   . . . .
   . . . .   More info at https://www.frida.re/docs/home/
Attaching...                                                            
[i] Looking for library
[i] Attaching to 0x15A8 of Java_com_secret_fridawars_MainActivity_init
[Pixel 3::com.secret.fridawars]-> BINGO: {secRet-[ffyzf9#~qaVQ^Z@Y]}
```

# Useful Reference
- [Linux injector explained](https://www.youtube.com/watch?v=uc1mbN9EJKQ)
- [JNI Hook example 1](https://github.com/Areizen/JNI-Frida-Hook/blob/master/agent.js)
- [JNI hook example 2](https://gist.github.com/709924470/9447431354bdbf997a07665f7a2bcf9f)
- [AOSP native loader](https://android.googlesource.com/platform/system/core/+/android-8.1.0_r1/libnativeloader/native_loader.cpp#561)