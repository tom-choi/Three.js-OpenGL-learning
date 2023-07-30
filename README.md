# Three.js-OpenGL-learning
Three.js-OpenGL-learning

# 啟動方式
## 1. html 下 Three.js Demo 啟動方式
安裝 Node.js，然後運行serve以在項目目錄中啟動本地服務器：npx 服務
```
npx serve .
```

## 2. three_fiber 啟動方式

```
cd three_fiber
npm run start
```

打開 `\html` 下的文件

# Three.js 使用方法
# 方法1 - import from a CDN

```html
<script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>

<script type="importmap">
    {
        "imports": 
        {
            "three": "https://unpkg.com/three/build/three.module.js",
            "three/addons/": "https://unpkg.com/three/examples/jsm/"
        }
    }
</script>

<script type="module">
    import * as THREE from 'three';
    import { ShaderMaterial } from 'three';
    ...
```

# 方法2 - 直接使用 unpkg.com

```html
<script type="module">
    import * as THREE from 'https://unpkg.com/three/build/three.module.js';
    import { ShaderMaterial } from 'https://unpkg.com/three/build/three.module.js';
    ...
```

# 簡單筆記 (React)

```
npx create-react-app . --template minimal
```

# fiber, drei, postprocessing

```
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
```

```
npm create vite@latest ./ -- --template react
```