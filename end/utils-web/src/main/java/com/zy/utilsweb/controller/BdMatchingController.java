package com.zy.utilsweb.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.zy.utilsweb.entity.BdMatchBase;
import com.zy.utilsweb.utils.Utils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/bdMatching")
public class BdMatchingController {

    @PostMapping("/bdMatch")
    public BdMatchBase BdMatch(@RequestBody String text) {
        BdMatchBase base = JSONObject.parseObject(text, BdMatchBase.class);
        List<BdMatchBase.BdMatchBaseList> baseList = base.getList();

        for (BdMatchBase.BdMatchBaseList bdMatch : baseList) {
            String title = bdMatch.getTitle();
            List<BdMatchBase.BdMatchBaseList.ContentList> contentList = bdMatch.getContentList();

            log.info("匹配标题: {}", title);

            BdMatchBase.BdMatchBaseList.ContentList contentVoRes = new BdMatchBase.BdMatchBaseList.ContentList();

            for (BdMatchBase.BdMatchBaseList.ContentList contentVo : contentList) {
                String content = (String) contentVo.getContent();
                log.info("匹配内容: {}", content);
                double rate = Utils.matchByTile(title, content);
                log.info("匹配度: {}", rate);
                contentVo.setContent(rate);
                if (rate < 0.12) {
                    contentList.remove(contentVo);
                }
            }
        }
        return base;
    }

}
