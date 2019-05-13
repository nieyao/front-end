//冒泡排序
function bubbleSort (arr) {
  console.time('冒泡排序耗时：');  
  var len = arr.length; 
  for (var i = 0; i < len; i++) {  
      for (var j = 0; j < len - i -1; j++){  
          if (arr[j]>arr[j+1]) {  //相邻元素进行对比  
              var temp = arr[j+1];//交换元素  
              arr[j+1] = arr[j];  
              arr[j] = temp;  
          }  
      }  
  }
  console.timeEnd('冒泡排序耗时：');  
  return arr;//返回数组  
}  
var arr=[1,45,37,5,48,15,37,26,29,2,46,4,17,50,52];//调用排序算法  
console.log(bubbleSort(arr));//控制台输出结果 





//快速排序
function quickSort (arr) {
  console.time('快速排序耗时：'); 
  if (arr.length <=1) return arr;//小于等于1时不用排序，直接返回
  var pivotIndex = Math.floor(arr.length / 2);//取基准点
  var pivot = arr.splice(pivotIndex,1)[0];//取基准点的值
  var left = [];//存放比基准点小的数
  var right = []//存放比基准点大的数
  for (var i = 0;i < arr.length;i++) {
    if (arr[i] < pivot ) {
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }
  //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1
  console.timeEnd('快速排序耗时：'); 
  return quickSort(left).concat([pivot],quickSort(right));
}
var arr=[1,45,37,5,48,15,37,26,29,2,46,4,17,50,52];//调用排序算法  
console.log(quickSort(arr));//控制台输出结果 





//选择排序
function selectSort (arr) {
  console.time('选择排序耗时：');
  var len = arr.length;
  var minIndex,temp;
  for (var i = 0;i < len - 1;i++){
    minIndex = i;//记录每次循环的第一个数为该次循环的最小值索引
    for (var j = i + 1;j < len;j++){//循环剩余的数组元素
      if (arr[j] < arr[minIndex]){
        minIndex = j;//把剩余元素中的最小值的下标赋给minIndex
      }
    }
    //把剩余元素的第一个数和最小值调换
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd('选择排序耗时：');
  return arr;
}
var arr=[1,45,37,5,48,15,37,26,29,2,46,4,17,50,52];//调用排序算法  
console.log(selectSort(arr));//控制台输出结果 




//插入排序
function insertSort (arr) {
  console.time('插入排序耗时：');
  var len = arr.length;
  for (var i = 1;i < len;i++) {
    var temp = arr[i];//取出无序数组中的第i个作为被插入元素
    var j = i - 1;//记住有序数组的最后一个位置，并且将有序数组位置扩大一个
    while (j >= 0 && temp < arr[j]) {//比大小，找到被插入元素所在的位置
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;//插入
  }
  console.timeEnd('插入排序耗时：')
  return arr;
}
var arr=[1,45,37,5,48,15,37,26,29,2,46,4,17,50,52];//调用排序算法  
console.log(insertSort(arr));//控制台输出结果 





//希尔排序
function shellSort (arr) {
  console.time('希尔排序耗时：');
  var len = arr.length,
    temp,
    gap = 1;
    while (gap < len / 5) {//动态定义间隔序列
      gap = gap * 5 + 1;
    }
    for (gap;gap > 0;gap = Math.floor(gap / 5)) {
      for (i = gap;i < len;i++) {
        temp = arr[i];
        for (var j = i - gap;j > 0 && arr[j] > temp;j-=gap) {
          arr[j + gap] = arr[j];
        }
        arr[j + gap] = temp;
      }
    }
    console.timeEnd('希尔排序耗时：');
    return arr;
}
var arr=[1,45,37,5,48,15,37,26,29,2,46,4,17,50,52];//调用排序算法  
console.log(shellSort(arr));//控制台输出结果 




//归并排序
function mergeSort (arr) {
  var len = arr.length;
  if (len < 2) return arr;
  var middle = Math.floor(len / 2),
    left = arr.slice(0,middle),
    right = arr.slice(middle);
  return merge(mergeSort(left),mergeSort(right));
}

function merge (left,right) {
  var result = [];
  console.time('归并排序耗时');
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    }else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  console.timeEnd('归并排序耗时');
  return result;
}
var arr=[1,45,37,5,48,15,37,26,29,2,46,4,17,50,52];//调用排序算法  
console.log(mergeSort(arr));//控制台输出结果 




//堆排序
function heapSort (arr) {
  console.time('堆排序耗时：')
  if (Object.prototype.toString.call(arr).slice(8,-1) === 'Array') {
    //建堆
    var heapSize = arr.length,
      temp;
    for (var i = Math.floor(heapSize / 2) - 1;i >= 0;i--) {
      heapify(arr,i,heapSize)
    }

    //堆排序
    for (var j = heapSize - 1;j >= 1;j--) {
      temp = arr[0];
      arr[0] = arr[j];
      arr[j] = temp;
      heapify(arr,0,--heapSize)
    }
    console.timeEnd('堆排序耗时：');
    return arr;
  } else {
    return 'arr is not an Array';
  }
}

//维护堆的性质
function heapify(arr,x,len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
    var l = 2 * x + 1,
      r = 2 * x + 2,
      largest = x,
      temp;
      if (l < len && arr[l] > arr[largest]) {
        largest = l;
      } 
      if (r < len && arr[r] > arr[largest]) {
        largest = r;
      }
      if (largest !== x) {
        temp = arr[x];
        arr[x] = arr[largest];
        arr[largest] = temp;
        heapify(arr, largest, len);
      }
  } else {
    return 'arr is not an Array or x is not a number!';
  }
}
var arr=[1,45,37,5,48,15,37,26,29,2,46,4,17,50,52];//调用排序算法  
console.log(heapSort(arr));//控制台输出结果 





//计数排序
function countSort (arr) {
  var len = arr.length,
    B = [],
    C = [],
    min = max =arr[0];
  console.time('计数排序耗时：');
  for (var i = 0;i < len;i++) {
    min = min <= arr[i] ? min : arr[i];
    max = max >= arr[i] ? max : arr[i];
    C[arr[i]] = C[arr[i]] ? C[arr[i]] + 1 : 1;
  }
  for (var j = min;j < max;j++) {
    C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }
  for (var k = len - 1;k >= 0;k--) {
    B[C[arr[k]] - 1] = arr[k];
    C[arr[k]]--;
  }
  console.timeEnd('计数排序耗时：');
  return B;
}
var arr=[1,45,37,5,48,15,37,26,29,2,46,4,17,50,52];//调用排序算法  
console.log(countSort(arr));//控制台输出结果 






