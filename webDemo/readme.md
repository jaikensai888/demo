# 1. vsCode webDemo
-  usage
    >osx method
    
    - Press CMD+Shift+P to open the Command Palette.
    - Type “ctr” and select the Configure Task Runner command to open tasks.json.
    - Delete the current placeholder contents.
    -  Enter the following:
    ```
    {
        "version": "0.1.0",
        "command": "Chrome",
        "osx": {
            "command": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        },
        "args": ["${file}"]
    }
    ``` 
    - To test it, open an HTML file in Visual Studio Code and press Ctrl+Shift+B. It should open in Chrome.

    >windows method
    
    - Press Ctrl+Shift+P to open the Command Palette.
    - Type “ctr” and select the Configure Task Runner command to open tasks.json.
    -  Delete the current placeholder contents.
    -  Enter the following:

    ```{
        "version": "0.1.0",
        "command": "Chrome",
        "windows": {
            "command": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
        },
        "args": ["${file}"]
    }
    ```
    - To test it, open an HTML file in Visual Studio Code and press Ctrl+Shift+B. It should open in Chrome.



