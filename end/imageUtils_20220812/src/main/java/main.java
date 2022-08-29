import cn.hutool.core.util.XmlUtil;
import net.coobird.thumbnailator.Thumbnails;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import java.io.*;
import java.nio.file.Files;

public class main {

    public static void main(String[] args) throws IOException {
        imageThumbnail();
    }

    private static void imageThumbnail() throws IOException {

        String inputPath = "";
        String outPath = "";
        float scale = 0.7f;
        double miniSize = 1024;

        File logFile = new File("log.txt");
        FileOutputStream logFileoutputStream = new FileOutputStream(logFile);
        File file = new File("application.xml");
        Document document = XmlUtil.readXML(file);
        NodeList nodeList = document.getElementsByTagName("配置信息");
        NodeList childNodes = nodeList.item(0).getChildNodes();
        for (int i = 0; i < childNodes.getLength(); i++) {
            Node item = childNodes.item(i);
            if ("导入文件夹目录".equals(item.getNodeName())) {
                inputPath = item.getTextContent();
            } else if ("导出文件夹目录".equals(item.getNodeName())) {
                outPath = item.getTextContent();
            } else if ("压缩比例".equals(item.getNodeName())) {
                scale = Float.parseFloat(item.getTextContent());
            } else if ("压缩最大值".equals(item.getNodeName())) {
                miniSize = Integer.parseInt(item.getTextContent());
            }
        }

        File dir = new File(inputPath);
        File[] files = dir.listFiles();
        assert files != null;
        logFileoutputStream.write(("共找到" + files.length + "张图片\r\n").getBytes());
        int count = 0;
        int success = 0;
        for (File inputFile : files) {
            count++;
            logFileoutputStream.write(("正在执行第" + count + "张图片\r\n").getBytes());
            String inputName = inputFile.getName();
            try {
                String inputFilePath = inputPath + inputName;
                String outFilePath = outPath + inputName;

                File outFile = new File(outFilePath);

                if (outFile.exists()) {
                    boolean delete = outFile.delete();
                }

                String inputFileSize = String.format("%.1f", inputFile.length() / 1024.0);
                String outFileSize = String.format("%.1f", inputFile.length() / 1024.0);

                int size = 0;
                if (Double.parseDouble(inputFileSize) > miniSize) {
                    logFileoutputStream.write(("开始压缩第" + count + "张图片\r\n").getBytes());
                    while (Double.parseDouble(outFileSize) > miniSize) {
                        size++;
                        Thumbnails.of(inputFilePath).scale(scale).outputQuality(scale).toFile(outFilePath);
                        inputFilePath = outFilePath;
                        outFileSize = String.format("%.1f", outFile.length() / 1024.0);
                        if (size > 3) {
                            break;
                        }
                    }
                    success++;
                } else {
                    logFileoutputStream.write(("原样输出第" + count + "张图片\r\n").getBytes());
                    Files.copy(inputFile.toPath(), outFile.toPath());
                    success++;
                }
            } catch (Exception e) {
                logFileoutputStream.write(("第" + count + "张图片压缩失败,文件名: " + inputName + "\r\n").getBytes());
            }
        }
        logFileoutputStream.write(("压缩完成，成功压缩" + success + "张图片").getBytes());
    }


}
