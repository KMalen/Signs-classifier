import React from "react";
import ReactDOM from "react-dom";
import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';
import "./styles.css";
tf.setBackend('webgl');

const threshold = 0.75;

async function load_model() {
    const model = await loadGraphModel("https://raw.githubusercontent.com/Ibraitas/Signs-classifier/master/web_model/model.json");
    return model;
  }

let classesDir = {
    1: {
        name: '1.1',
        id: 1,
    },
    2: {
        name: '1.2',
        id: 2,
    },
    3: {
        name: '1.3.1',
        id: 3,
    },
    4: {
        name: '1.3.2',
        id: 4,
    },
    5: {
        name: '1.4.1',
        id: 5,
    },
	6: {
        name: '1.4.2',
        id: 6,
    },
	7: {
        name: '1.4.3',
        id: 7,
    },
	8: {
        name: '1.4.4',
        id: 8,
    },
	9: {
        name: '1.4.5',
        id: 9,
    },
	10: {
        name: '1.4.6',
        id: 10,
    },
	11: {
        name: '1.5',
        id: 11,
    },
	12: {
        name: '1.6',
        id: 12,
    },
	13: {
        name: '1.7',
        id: 13,
    },
	14: {
        name: '1.8',
        id: 14,
    },
	15: {
        name: '1.9',
        id: 15,
    },
	16: {
        name: '1.10',
        id: 16,
    },
	17: {
        name: '1.11.1',
        id: 17,
    },
	18: {
        name: '1.11.2',
        id: 18,
    },
	19: {
        name: '1.12.1',
        id: 19,
    },
	20: {
        name: '1.12.2',
        id: 20,
    },
	21: {
        name: '1.13',
        id: 21,
    },
	22: {
        name: '1.14',
        id: 22,
    },
	23: {
        name: '1.15',
        id: 23,
    },
	24: {
        name: '1.16.1',
        id: 24,
    },
	25: {
        name: '1.16.2',
        id: 25,
    },
	26: {
        name: '1.16.3',
        id: 26,
    },
	27: {
        name: '1.17',
        id: 27,
    },
	28: {
        name: '1.18.1',
        id: 28,
    },
	29: {
        name: '1.18.2',
        id: 29,
    },
	30: {
        name: '1.18.3',
        id: 30,
    },
	31: {
        name: '1.18.4',
        id: 31,
    },
	32: {
        name: '1.18.5',
        id: 32,
    },
	33: {
        name: '1.18.6',
        id: 33,
    },
	34: {
        name: '1.19.1',
        id: 34,
    },
	35: {
        name: '1.19.2',
        id: 35,
    },
	36: {
        name: '1.20',
        id: 36,
    },
	37: {
        name: '1.21',
        id: 37,
    },
	38: {
        name: '1.22',
        id: 38,
    },
	39: {
        name: '1.23',
        id: 39,
    },
	40: {
        name: '1.24',
        id: 40,
    },
	41: {
        name: '1.25',
        id: 41,
    },
	42: {
        name: '1.26',
        id: 42,
    },
	43: {
        name: '1.27',
        id: 43,
    },
	44: {
        name: '1.28',
        id: 44,
    },
	45: {
        name: '1.29',
        id: 45,
    },
	46: {
        name: '1.30',
        id: 46,
    },
	47: {
        name: '1.31.1',
        id: 47,
    },
	48: {
        name: '1.31.2',
        id: 48,
    },
	49: {
        name: '1.31.3',
        id: 49,
    },
	50: {
        name: '1.31.4',
        id: 50,
    },
	51: {
        name: '1.31.5',
        id: 51,
    },
	52: {
        name: '1.32',
        id: 52,
    },
	53: {
        name: '1.33',
        id: 53,
    },
	54: {
        name: '1.34',
        id: 54,
    },
	55: {
        name: '1.35',
        id: 55,
    },
	56: {
        name: '1.16.4',
        id: 56,
    },
	57: {
        name: '2.1',
        id: 57,
    },
	58: {
        name: '2.2',
        id: 58,
    },
	59: {
        name: '2.3.1',
        id: 59,
    },
	60: {
        name: '2.3.2',
        id: 60,
    },
	61: {
        name: '2.3.3',
        id: 61,
    },
	62: {
        name: '2.3.4',
        id: 62,
    },
	63: {
        name: '2.4',
        id: 63,
    },
	64: {
        name: '2.5',
        id: 64,
    },
	65: {
        name: '2.6.1',
        id: 65,
    },
	66: {
        name: '2.6.2',
        id: 66,
    },
	67: {
        name: '2.7',
        id: 67,
    },
	68: {
        name: '3.1',
        id: 68,
    },
	69: {
        name: '3.2',
        id: 69,
    },
	70: {
        name: '3.3',
        id: 70,
    },
	71: {
        name: '3.9',
        id: 71,
    },
	72: {
        name: '3.10',
        id: 72,
    },
	73: {
        name: '3.18.1',
        id: 73,
    },
	74: {
        name: '3.18.2',
        id: 74,
    },
	75: {
        name: '3.19',
        id: 75,
    },
	76: {
        name: '3.20.1',
        id: 76,
    },
	77: {
        name: '3.24.1',
        id: 77,
    },
	78: {
        name: '3.27',
        id: 78,
    },
	79: {
        name: '3.28',
        id: 79,
    },
	80: {
        name: '4.1.1',
        id: 80,
    },
	81: {
        name: '4.1.2',
        id: 81,
    },
	82: {
        name: '4.1.3',
        id: 82,
    },
	83: {
        name: '4.1.4',
        id: 83,
    },
	84: {
        name: '4.1.5',
        id: 84,
    },
	85: {
        name: '4.2.1',
        id: 85,
    },
	86: {
        name: '4.2.2',
        id: 86,
    },
	87: {
        name: '4.3',
        id: 87,
    },
	88: {
        name: '4.5.1',
        id: 88,
    },
	89: {
        name: '4.5.2',
        id: 89,
    },
	90: {
        name: '4.6.1',
        id: 90,
    },
	91: {
        name: '4.6.2',
        id: 91,
    },
	92: {
        name: '5.5',
        id: 92,
    },
	93: {
        name: '5.6',
        id: 93,
    },
	94: {
        name: '5.7.1',
        id: 94,
    },
	95: {
        name: '5.7.2',
        id: 95,
    },
	96: {
        name: '5.11.1',
        id: 96,
    },
	97: {
        name: '5.12.1',
        id: 97,
    },
	98: {
        name: '5.15',
        id: 98,
    },
	99: {
        name: '5.16.1',
        id: 99,
    },
	100: {
        name: '5.16.2',
        id: 100,
    }
	
}

class App extends React.Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();


  componentDidMount() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user"
          }
        })
        .then(stream => {
          window.stream = stream;
          this.videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            this.videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });

      const modelPromise = load_model();

      Promise.all([modelPromise, webCamPromise])
        .then(values => {
          this.detectFrame(this.videoRef.current, values[0]);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

    detectFrame = (video, model) => {
        tf.engine().startScope();
        model.executeAsync(this.process_input(video)).then(predictions => {
        this.renderPredictions(predictions, video);
        requestAnimationFrame(() => {
          this.detectFrame(video, model);
        });
        tf.engine().endScope();
      });
  };

  process_input(video_frame){
    const tfimg = tf.browser.fromPixels(video_frame).toInt();
    const expandedimg = tfimg.transpose([0,1,2]).expandDims();
    return expandedimg;
  };

  buildDetectedObjects(scores, threshold, boxes, classes, classesDir) {
    const detectionObjects = []
    var video_frame = document.getElementById('frame');

    scores[0].forEach((score, i) => {
      if (score > threshold) {
        const bbox = [];
        const minY = boxes[0][i][0] * video_frame.offsetHeight;
        const minX = boxes[0][i][1] * video_frame.offsetWidth;
        const maxY = boxes[0][i][2] * video_frame.offsetHeight;
        const maxX = boxes[0][i][3] * video_frame.offsetWidth;
        bbox[0] = minX;
        bbox[1] = minY;
        bbox[2] = maxX - minX;
        bbox[3] = maxY - minY;
        detectionObjects.push({
          class: classes[i],
          label: classesDir[classes[i]].name,
          score: score.toFixed(4),
          bbox: bbox
        })
      }
    })
    return detectionObjects
  }

  renderPredictions = predictions => {
    const ctx = this.canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";

    //Getting predictions
    const boxes = predictions[1].arraySync();
    const scores = predictions[4].arraySync();
    const classes = predictions[2].dataSync();
    const detections = this.buildDetectedObjects(scores, threshold,
                                    boxes, classes, classesDir);

    detections.forEach(item => {
      const x = item['bbox'][0];
      const y = item['bbox'][1];
      const width = item['bbox'][2];
      const height = item['bbox'][3];

      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(item["label"] + " " + (100 * item["score"]).toFixed(2) + "%").width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    detections.forEach(item => {
      const x = item['bbox'][0];
      const y = item['bbox'][1];

      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(item["label"] + " " + (100*item["score"]).toFixed(2) + "%", x, y);
    });
  };

  render() {
    return (
      <div>
        <h1>Real-Time Object Detection: Signs Classifier</h1>
        <h3>MobileNetV2</h3>
        <video
          style={{height: '600px', width: "500px"}}
          className="size"
          autoPlay
          playsInline
          muted
          ref={this.videoRef}
          width="600"
          height="500"
          id="frame"
        />
        <canvas
          className="size"
          ref={this.canvasRef}
          width="600"
          height="500"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);