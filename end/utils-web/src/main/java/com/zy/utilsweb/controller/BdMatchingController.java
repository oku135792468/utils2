package com.zy.utilsweb.controller;

import com.zy.utilsweb.entity.BdMatchBase;
import com.zy.utilsweb.utils.Utils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bdMatching")
public class BdMatchingController {

    @PostMapping("/bdMatch")
    public BdMatchBase BdMatch(@RequestBody BdMatchBase base) {
        List<BdMatchBase.BdMatchBaseList> baseList = base.getList();

        for (BdMatchBase.BdMatchBaseList bdMatch : baseList) {
            String title = bdMatch.getTitle();
            List<BdMatchBase.BdMatchBaseList.ContentList> contentList = bdMatch.getContentList();

            for (BdMatchBase.BdMatchBaseList.ContentList contentVo : contentList) {
                String content = (String) contentVo.getContent();
                double v = Utils.matchByTile(title, content);
                contentVo.setContent(v);
            }
        }
        return base;
    }

}
