<?php
    include 'connect.php';  
    $currentId = isset($_GET["currentId"])?$_GET["currentId"] : "";
    $jia = isset($_GET["jia"])?$_GET["jia"] : "";
    // echo $currentId;
    // echo $jia;
    if($currentId && $jia){
        $qty = "update buycar set qty=qty+1 where uid='$currentId'";
        $result = $conn->query($qty);
        if($result){
            $sql = 'select * from buycar';
            //获取查询结果集
            $result = $conn->query($sql);
            //使用查询结果集
            $row = $result->fetch_all(MYSQLI_ASSOC);
            //释放查询结果集，避免资源浪费
            $result->close();
            echo json_encode($row,JSON_UNESCAPED_UNICODE);
        }else{
            echo "商品添加失败";
        }
    }
    else if($currentId){
        $qty = "update buycar set qty=qty-1 where uid='$currentId'";
        $result = $conn->query($qty);
        if($result){
            $sql = 'select * from buycar';
            //获取查询结果集
            $result = $conn->query($sql);
            //使用查询结果集
            $row = $result->fetch_all(MYSQLI_ASSOC);
            //释放查询结果集，避免资源浪费
            $result->close();
            echo json_encode($row,JSON_UNESCAPED_UNICODE);
        }else{
            echo "商品减少失败";
        }
    }
   


?>