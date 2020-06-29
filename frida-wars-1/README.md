# frida-wars
+ 27th - 29th June
+ [FRIDA wars website](https://fridawars.sec-r.et/)
+ [Rules](https://fridawars.sec-r.et/rules)

## Usage

```
frida -U -l t.js -f <apk> --runtime=v8
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
