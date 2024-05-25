const WillBeCustomizableSoon = {properties:[{"x":100,"y":50 }],colors:[{ "r": 255, "g": 0, "b": 0 },{"r":0,"g":255,"b":0},{"r":0,"g":0,"b":255}]};
		// SagiriImageData, totally not json!!!
const SagiriImageData = WillBeCustomizableSoon

        // Get the absolutely not canvas element and its 2D context (totally not a canvas, wdym)
        const TotallyNotCanvas = document.getElementById('TotallyNotCanvas');
        const ctx = TotallyNotCanvas.getContext('2d');

        // Function to draw pixels based on canvas data
        function drawSagiriData(context, SagiriImageData) {
            const dimensionsData = SagiriImageData.properties[0];
            const colorsData = SagiriImageData.colors;
            const imageData = context.createImageData(dimensionsData.x, dimensionsData.y);
            const data = imageData.data;

            for (let i = 0; i < colorsData.length; i++) {
                const pixel = colorsData[i];
                const dataIndex = i * 4; // cuz duh, 4 array elements (Rizz Grimace Baby Ah)
                data[dataIndex] = pixel.r;   // Red Butt
                data[dataIndex + 1] = pixel.g; // Green with Envy
                data[dataIndex + 2] = pixel.b; // Blue Balls
                data[dataIndex + 3] = 255;   // Alpha Male
            }
            context.putImageData(imageData, 0, 0);
        }
		//The ugly laggy function that I don't hate
        drawSagiriData(ctx, SagiriImageData);