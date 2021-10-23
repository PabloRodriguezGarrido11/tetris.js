const colorList = ["#407294", "#869FDB", "#3E3223", "#FFE9B5", "#96200B", "#DBC01E",
                   "#66670D", "#FFA700", "#4B1A00", "#A73F12", "#1E4D3D", "#AB6E22",]

export function getRandomColor(){
  return colorList[Math.floor(Math.random() * colorList.length)]
}
