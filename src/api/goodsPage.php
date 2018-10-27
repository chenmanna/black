<?php
    include 'connect.php';
    $currentCon = isset($_GET["goodsname"])?$_GET["goodsname"]: "hhh";
    $currentPage = isset($_GET["currentPage"])?$_GET["currentPage"]: "hhh";
    $qty = isset($_GET["qty"])?$_GET["qty"]: "hhh";
    $sql = "select * from goodslist where goodsname='$currentCon'";
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $len = count($row);
    $dataArr = array_slice($row,($currentPage-1)*$qty,$qty);
    // var_dump($dataArr);
    $resArr = array(
        "data" => $dataArr,
        "len" => $len,
        "currentPage" => $currentPage,
        "qty" => $qty
        );
    echo json_encode($resArr,JSON_UNESCAPED_UNICODE);
?>