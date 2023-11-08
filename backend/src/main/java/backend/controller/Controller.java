package backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("api/voteEase")
public class Controller {

    @Autowired
    private backend.service.HouseService houseService;

    @GetMapping("/houses")
    public List<backend.model.House> getAllHouses() {
        return houseService.getAllHouses();
    }

    @GetMapping("/houses/{id}")
    public backend.model.House getHouseById(@PathVariable long id) {
        return houseService.getHouseById(id);
    }

    @PostMapping("/houses")
    public void addHouse(@RequestBody backend.model.House house) {
        houseService.addHouse(house);
    }

    @GetMapping("/houses/slaapkamers/desc")
    public List<backend.model.House> getAllByOrderBySlaapkamersDesc() {
        return houseService.getAllByOrderBySlaapkamersDesc();
    }

    @GetMapping("/houses/slaapkamers/asc")
    public List<backend.model.House> getAllByOrderBySlaapkamersAsc() {
        return houseService.getAllByOrderBySlaapkamersAsc();
    }

    @GetMapping("/houses/huurprijs/asc")
    public List<backend.model.House> getAllByOrderByHuurprijsAsc() {
        return houseService.getAllByOrderByHuurprijsAsc();
    }

    @GetMapping("/houses/huurprijs/desc")
    public List<backend.model.House> getAllByOrderByHuurprijsDesc() {
        return houseService.getAllByOrderByHuurprijsDesc();
    }

    @GetMapping("/houses/datum/asc")
    public List<backend.model.House> getAllByOrderByDatumAsc() {
        return houseService.getAllByOrderByDatumAsc();
    }

    @GetMapping("/houses/datum/desc")
    public List<backend.model.House> getAllByOrderByDatumDesc() {
        return houseService.getAllByOrderByDatumDesc();
    }

    @GetMapping("/houses/grootte/asc")
    public List<backend.model.House> getAllByOrderByGrootteAsc() {
        return houseService.getAllByOrderByGrootteAsc();
    }

    @GetMapping("/houses/grootte/desc")
    public List<backend.model.House> getAllByOrderByGrootteDesc() {
        return houseService.getAllByOrderByGrootteDesc();
    }
}
