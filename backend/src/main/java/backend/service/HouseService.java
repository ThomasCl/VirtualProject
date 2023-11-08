package backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.model.House;
import backend.repo.HouseRepository;

@Service
public class HouseService {
    @Autowired
    private HouseRepository houseRepository;

    public HouseService() {
    }

    public List<House> getAllHouses() {
        return houseRepository.findAll();
    }

    public House getHouseById(long id) {
        return houseRepository.findHouseById(id);
    }

    public void addHouse(House house) {
        houseRepository.save(house);
    }

    public List<House> getAllByOrderBySlaapkamersDesc() {
        return houseRepository.findAllByOrderBySlaapkamersDesc();
    }

    public List<House> getAllByOrderBySlaapkamersAsc() {
        return houseRepository.findAllByOrderBySlaapkamersAsc();
    }

    public List<House> getAllByOrderByHuurprijsAsc() {
        return houseRepository.findAllByOrderByHuurprijsAsc();
    }

    public List<House> getAllByOrderByHuurprijsDesc() {
        return houseRepository.findAllByOrderByHuurprijsDesc();
    }

    public List<House> getAllByOrderByDatumAsc() {
        return houseRepository.findAllByOrderByDatumAsc();
    }

    public List<House> getAllByOrderByDatumDesc() {
        return houseRepository.findAllByOrderByDatumDesc();
    }

    public List<House> getAllByOrderByGrootteAsc() {
        return houseRepository.findAllByOrderByGrootteAsc();
    }

    public List<House> getAllByOrderByGrootteDesc() {
        return houseRepository.findAllByOrderByGrootteDesc();
    }
}
