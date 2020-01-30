// var map = AmCharts.makeChart("chartdiv", {
//     type: "map",
//     "theme": "light",
//     pathToImages: "https://www.amcharts.com/lib/3/images/",

//     imagesSettings: {
//         rollOverColor: "#919191",
//         rollOverScale: 3,
//         selectedScale: 3,
//         selectedColor: "#919191",
//         color: "#919191"//#13564e"
//     },

//     zoomControl: {
//         buttonFillColor: "#919191"
//     },

//     areasSettings: {
//         unlistedAreasColor: "#919191"
//     },

//     dataProvider: {
//         map: "worldLow",
//         images: [{
//             zoomLevel: 5,
//             scale: 0.5,
//             title: "INDIA",
//             latitude: 27.12,
//             longitude: 78.42
//         },
//         {
//             zoomLevel: 5,
//             scale: 0.5,
//             title: "UAE",
//             latitude: 27.12,
//             longitude: 58.42
//         },
//         {
//             zoomLevel: 5,
//             scale: 0.5,
//             title: "SWEDEN",
//             latitude: 63.12,
//             longitude: 18.42
//         },
//         {
//             zoomLevel: 5,
//             scale: 0.5,
//             title: "MALAYSIA",
//             latitude: 3.12,
//             longitude: 105.42
//         },
//         {
//             zoomLevel: 5,
//             scale: 0.5,
//             title: "USA",
//             latitude: 63.12,
//             longitude: -110.42
//         },
//         ]
//     }
// });


// map.addListener("positionChanged", updateCustomMarkers);


// function updateCustomMarkers(event) {
//     // get map object
//     var map = event.chart;

//     // go through all of the images
//     for (var x in map.dataProvider.images) {
//         // get MapImage object
//         var image = map.dataProvider.images[x];

//         // check if it has corresponding HTML element
//         if ('undefined' == typeof image.externalElement)
//             image.externalElement = createCustomMarker(image);

//         // reposition the element accoridng to coordinates
//         image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
//         image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
//     }
// }


// function createCustomMarker(image) {
//     // create holder
//     var holder = document.createElement('div');
//     holder.className = 'map-marker';
//     holder.title = image.title;
//     holder.style.position = 'absolute';

//     // maybe add a link to it?
//     if (undefined != image.url) {
//         holder.onclick = function () {
//             window.location.href = image.url;
//         };
//         holder.className += ' map-clickable';
//     }

//     // create dot
//     var dot = document.createElement('div');
//     dot.className = 'dot';
//     holder.appendChild(dot);

//     // create pulse
//     var pulse = document.createElement('div');
//     pulse.className = 'pulse';
//     holder.appendChild(pulse);

//     // append the marker to the map container
//     image.chart.chartDiv.appendChild(holder);

//     return holder;
// }


// $("a").hover(function () {
//    $(".cursor").toggleClass("hover");
// });

// // set the starting position of the cursor outside of the screen
// let clientX = -100;
// let clientY = -100;
// const innerCursor = document.querySelector(".cursor--small");

// const initCursor = () => {
//   // add listener to track the current mouse position
//   document.addEventListener("mousemove", e => {
//     clientX = e.clientX;
//     clientY = e.clientY;
//   });

//   // transform the innerCursor to the current mouse position
//   // use requestAnimationFrame() for smooth performance
//   const render = () => {
//     innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
//     // if you are already using TweenMax in your project, you might as well
//     // use TweenMax.set() instead
//     // TweenMax.set(innerCursor, {
//     //   x: clientX,
//     //   y: clientY
//     // });

//     requestAnimationFrame(render);
//   };
//   requestAnimationFrame(render);
// };

// initCursor();


// let lastX = 0;
// let lastY = 0;
// let isStuck = false;
// let showCursor = false;
// let group, stuckX, stuckY, fillOuterCursor;

// const initCanvas = () => {
//   const canvas = document.querySelector(".cursor--canvas");
//   const shapeBounds = {
//     width: 75,
//     height: 75
//   };
//   paper.setup(canvas);
//   const strokeColor = "rgba(0, 0, 255, 0.5)";
//   const strokeWidth = 1;
//   const segments = 8;
//   const radius = 15;


//   // the base shape for the noisy circle
//   const polygon = new paper.Path.RegularPolygon(
//     new paper.Point(0, 0),
//     segments,
//     radius
//   );
//   polygon.strokeColor = strokeColor;
//   polygon.strokeWidth = strokeWidth;
//   polygon.smooth();
//   group = new paper.Group([polygon]);
//   group.applyMatrix = false;

//   const noiseObjects = polygon.segments.map(() => new SimplexNoise());
//   let bigCoordinates = [];

//   // function for linear interpolation of values
//   const lerp = (a, b, n) => {
//     return (1 - n) * a + n * b;
//   };

//   // function to map a value from one range to another range
//   const map = (value, in_min, in_max, out_min, out_max) => {
//     return (
//       ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
//     );
//   };

//   // the draw loop of Paper.js 
//   // (60fps with requestAnimationFrame under the hood)
//   paper.view.onFrame = event => {
//     // using linear interpolation, the circle will move 0.2 (20%)
//     // of the distance between its current position and the mouse
//     // coordinates per Frame
//     lastX = lerp(lastX, clientX, 0.2);
//     lastY = lerp(lastY, clientY, 0.2);
//     group.position = new paper.Point(lastX, lastY);
//   }
// }

// initCanvas();


// //hover state

// const initHovers = () => {

//   // find the center of the link element and set stuckX and stuckY
//   // these are needed to set the position of the noisy circle
//   const handleMouseEnter = e => {
//     const navItem = e.currentTarget;
//     const navItemBox = navItem.getBoundingClientRect();
//     stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
//     stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
//     isStuck = true;
//   };

//   // reset isStuck on mouseLeave
//   const handleMouseLeave = () => {
//     isStuck = false;
//   };

//   // add event listeners to all items
//   const linkItems = document.querySelectorAll("a");
//   linkItems.forEach(item => {
//     item.addEventListener("mouseenter", handleMouseEnter);
//     item.addEventListener("mouseleave", handleMouseLeave);
//   });
// };

// initHovers();

